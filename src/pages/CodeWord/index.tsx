import { useEffect, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { StreamKey } from '../../quizzes/types';
import './CodeWord.css';

const WORD = ['М', 'Е', 'Н', 'Я', 'Й'];

const CodeWord: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const results: boolean[] = location.state?.results || [];
  const stream = location.state?.stream as StreamKey | undefined;

  const [guess, setGuess] = useState<string>('');
  const [reveal, setReveal] = useState<boolean>(false);
  const [showBadge, setShowBadge] = useState<boolean>(false);
  const [guessError, setGuessError] = useState<boolean>(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState<boolean>(false);

  const correctCount = results.filter(Boolean).length;

  const isPerfect = correctCount === WORD.length;
  const isPartial = correctCount > 0 && correctCount < WORD.length;

  useEffect(() => {
    if (stream) {
      localStorage.removeItem(`quiz-${stream}`);
      localStorage.removeItem(`quiz-question-timer-${stream}`);
      localStorage.removeItem(`quiz-question-index-${stream}`);
    }

    if (!isPartial) {
      const revealTimer = setTimeout(() => setReveal(true), 3000);

      const badgeTimer = setTimeout(() => {
        if (isPerfect) setShowBadge(true);
      }, 4000);

      const redirectTimer = setTimeout(() => {
        navigate('/final');
      }, 8000);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(badgeTimer);
        clearTimeout(redirectTimer);
      };
    }
  }, [stream, navigate, isPartial, isPerfect]);

  const handleGuess = () => {
    const normalize = (word: string) => word.toLowerCase().trim();
    const correctWord = WORD.join('').toLowerCase();

    if (!guess.trim()) return;

    if (normalize(guess) === correctWord) {
      setGuess('');
      setGuessedCorrectly(true);
      setReveal(true);

      setTimeout(() => {
        setShowBadge(true);
      }, 2500);

      setTimeout(() => {
        navigate('/final');
      }, 4500);
    } else {
      setGuessError(true);

      setTimeout(() => {
        setGuessError(false);
        setReveal(true);
      }, 1000);

      setTimeout(() => navigate('/final'), 5000);
    }
  };

  return (
    <div className="code-wrapper">
      <div className="code-inner">
        <h1 className={`code-word ${guessError ? 'error' : ''}`}>
          {WORD.map((letter, i) => {
            const isCorrect = results[i];

            return (
              <span key={i} className="code-slot">
                <span className="code-measure">{letter}</span>

                <span className={`code-base ${!isCorrect && reveal ? 'code-base--hide' : ''}`}>
                  {isCorrect ? letter : '_'}
                </span>

                {!isCorrect && (
                  <span
                    className={`code-reveal ${reveal ? 'show' : ''}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {letter}
                  </span>
                )}
              </span>
            );
          })}
        </h1>

        {isPartial && !reveal && !showBadge && (
          <form
            className="guess-block"
            onSubmit={(e) => {
              e.preventDefault();
              handleGuess();
            }}
          >
            <h1 className="guess-title">ЕСТЬ ДОГАДКИ, ЧТО ЗА СЛОВО?</h1>

            <div className="guess-input-row">
              <input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="guess-input"
                autoFocus
              />

              <button type="submit" className="guess-button">
                Попробовать
              </button>
            </div>
          </form>
        )}

        {showBadge && (isPerfect || guessedCorrectly) && (
          <div className="code-badge code-badge--visible">
            <span className="code-badge-text">Идеально!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWord;
