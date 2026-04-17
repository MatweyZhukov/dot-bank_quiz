import { type FC, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import { getVariant } from '../../quizzes/getVariant';
import type { StreamKey } from '../../quizzes/types';
import './Quiz.css';

const getInitialTime = (timerKey: string | null): number => {
  if (!timerKey) return 60;

  const savedEnd = localStorage.getItem(timerKey);

  if (!savedEnd) {
    const newEnd = Date.now() + 60 * 1000;
    localStorage.setItem(timerKey, String(newEnd));
    return 60;
  }

  return Math.max(0, Math.floor((Number(savedEnd) - Date.now()) / 1000));
};

const Quiz: FC = () => {
  const { stream } = useParams();
  const navigate = useNavigate();

  const QUIZ_KEY = stream ? `quiz-${stream}` : null;
  const TIMER_KEY = stream ? `quiz-timer-${stream}` : null;

  const quizVariant = useMemo(() => {
    if (!stream) return null;
    return getVariant(stream as StreamKey);
  }, [stream]);

  const [results, setResults] = useState<boolean[]>([]);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const [timeLeft, setTimeLeft] = useState<number>(() => getInitialTime(TIMER_KEY));

  useEffect(() => {
    if (!stream) return;

    const interval = setInterval(() => {
      const savedEnd = localStorage.getItem(TIMER_KEY!);

      if (!savedEnd) return;

      const diff = Math.floor((Number(savedEnd) - Date.now()) / 1000);

      if (diff <= 0) {
        clearInterval(interval);
        localStorage.removeItem(TIMER_KEY!);
        navigate('/over');
        return;
      }

      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [stream, navigate, TIMER_KEY]);

  if (!quizVariant || !stream) return null;

  const currentQuestion = quizVariant[questionIndex];

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim()) return;

    const normalizeAnswer = (value: string) => value.toLowerCase().trim();

    const isAnswerCorrect = currentQuestion.correctAnswers.some(
      (correct) => normalizeAnswer(correct) === normalizeAnswer(userAnswer)
    );

    const updatedResults = [...results, isAnswerCorrect];
    setResults(updatedResults);

    const isLastQuestion = questionIndex + 1 >= quizVariant.length;

    if (isLastQuestion) {
      localStorage.removeItem(QUIZ_KEY!);
      localStorage.removeItem(TIMER_KEY!);

      navigate('/code-word', {
        state: {
          results: updatedResults,
          stream,
        },
      });

      return;
    }

    setQuestionIndex((prev) => prev + 1);
    setUserAnswer('');
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <span className="quiz-step">{questionIndex + 1}</span>

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
          <Button width="1072px" height="216px" borderRadius="100px" onClick={handleAnswerSubmit}>
            Отправить ответ
          </Button>

          <Button width="216px" height="216px" borderRadius="50%">
            →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
