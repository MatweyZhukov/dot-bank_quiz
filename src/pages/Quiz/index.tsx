import { type FC, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import FailureQuestion from '../../components/FailureQuestion';
import Over from '../../components/Over';
import SuccessQuestion from '../../components/SuccessQuestion';
import { useQuizProgress } from '../../hooks/useQuizProgress';
import type { StreamKey } from '../../quizzes/types';
import { createTimer } from '../../utils/createTimer';
import { getRemaining } from '../../utils/getRemaining';
import { getVariant } from '../../utils/getVariant';
import './Quiz.css';

type ResultType = 'correct' | 'wrong' | 'timeout';
type ScreenState = 'question' | 'result';

type Result = {
  type: ResultType;
  value: boolean;
};

const getVariantCursorKey = (stream: StreamKey) => `quiz-variant-cursor-${stream}`;

const getVariantIndex = (stream: StreamKey) =>
  Number(localStorage.getItem(getVariantCursorKey(stream)) || 0);

const Quiz: FC = () => {
  const navigate = useNavigate();
  const { stream } = useParams();

  const TIMER_KEY = stream ? `quiz-question-timer-${stream}` : null;

  const { progress, setProgress, reset } = useQuizProgress(stream as StreamKey);

  const [screen, setScreen] = useState<ScreenState>('question');
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const quizVariant = useMemo(() => {
    if (!stream) return null;

    const variantIndex = getVariantIndex(stream as StreamKey);

    return getVariant(stream as StreamKey, variantIndex);
  }, [stream]);

  const currentQuestion = quizVariant?.[progress.questionIndex];

  const proceedToNext = (type: ResultType) => {
    const isCorrect = type === 'correct';

    const updatedResults = [...progress.results, isCorrect];

    setResult({ type, value: isCorrect });
    setScreen('result');

    const isLast = progress.questionIndex + 1 >= quizVariant!.length;

    setTimeout(() => {
      if (isLast) {
        const key = getVariantCursorKey(stream as StreamKey);

        const current = Number(localStorage.getItem(key) || 0);
        localStorage.setItem(key, String(current + 1));

        reset();

        navigate('/code-word', {
          state: { results: updatedResults, stream },
        });

        return;
      }

      setProgress((prev) => ({
        questionIndex: prev.questionIndex + 1,
        results: updatedResults,
      }));

      setUserAnswer('');
      setTimeLeft(60);

      createTimer(TIMER_KEY);
      setScreen('question');
      setResult(null);
    }, 3000);
  };

  useEffect(() => {
    if (!quizVariant || screen !== 'question') return;

    if (!localStorage.getItem(TIMER_KEY!)) createTimer(TIMER_KEY);

    const interval = setInterval(() => {
      const remaining = getRemaining(TIMER_KEY);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        localStorage.removeItem(TIMER_KEY!);

        proceedToNext('timeout');
      }
    }, 250);

    return () => clearInterval(interval);
  }, [screen]);

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim() || !currentQuestion) return;

    const normalize = (v: string) => v.toLowerCase().trim();

    const isCorrect = currentQuestion.correctAnswers.some(
      (c) => normalize(c) === normalize(userAnswer)
    );

    proceedToNext(isCorrect ? 'correct' : 'wrong');
  };

  if (!quizVariant || !currentQuestion) return null;

  return (
    <div className="quiz">
      {screen === 'result' && result && (
        <div className="quiz-overlay">
          {result.type === 'correct' && <SuccessQuestion />}
          {result.type === 'wrong' && <FailureQuestion />}
          {result.type === 'timeout' && <Over />}
        </div>
      )}

      {screen === 'question' && (
        <>
          <div className="quiz-header">
            <span className="quiz-step">{progress.questionIndex + 1}</span>

            <span className="quiz-timer">
              {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
              {String(timeLeft % 60).padStart(2, '0')}
            </span>
          </div>

          <div className="quiz-content">{currentQuestion.component}</div>

          <div className="quiz-answer">
            <div className="quiz-input-block">
              <span className="quiz-answer-label">Ответ:</span>

              <input
                value={userAnswer}
                className="quiz-answer-input"
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </div>

            <div className="buttons-block">
              <Button
                width="1072px"
                height="216px"
                borderRadius="100px"
                onClick={handleAnswerSubmit}
              >
                Отправить ответ
              </Button>

              <Button width="216px" height="216px" borderRadius="50%" onClick={handleAnswerSubmit}>
                →
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
