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

  const [reveal, setReveal] = useState(false);

  const correctCount = results.filter(Boolean).length;

  useEffect(() => {
    if (stream) {
      localStorage.removeItem(`quiz-${stream}`);
      localStorage.removeItem(`quiz-question-timer-${stream}`);
      localStorage.removeItem(`quiz-question-index-${stream}`);
    }

    const letterTimer = setTimeout(() => setReveal(true), 3000);
    const redirectTimer = setTimeout(() => navigate('/final'), 8000);

    return () => {
      clearTimeout(letterTimer);
      clearTimeout(redirectTimer);
    };
  }, [stream, navigate]);

  return (
    <div className="code-wrapper">
      <div className="code-inner">
        <h1 className="code-word">
          {WORD.map((letter, i) => {
            const isCorrect = results[i];

            return (
              <span key={i} className="code-slot">
                {/* 🔥 фикс ширины */}
                <span className="code-measure">{letter}</span>

                {/* базовый слой */}
                <span className={`code-base ${!isCorrect && reveal ? 'code-base--hide' : ''}`}>
                  {isCorrect ? letter : '_'}
                </span>

                {/* анимируемая буква */}
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

        {correctCount === 5 && reveal && (
          <div className="code-badge code-badge--visible" style={{ animationDelay: '0.8s' }}>
            <span className="code-badge-text">Идеально!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWord;
