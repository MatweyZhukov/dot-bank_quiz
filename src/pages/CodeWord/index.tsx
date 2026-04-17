import { useEffect, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { StreamKey } from '../../quizzes/types';
import './CodeWord.css';

const letters = ['М', 'Е', 'Н', 'Я', 'Й'];

const CodeWord: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const results: boolean[] = location.state?.results || [];
  const stream = location.state?.stream as StreamKey | undefined;

  const word = letters.map((letter, index) => (results[index] ? letter : '_')).join('');

  const isPerfect = results.length === 5 && results.every(Boolean);

  useEffect(() => {
    if (stream) {
      localStorage.removeItem(`quiz-${stream}`);
      localStorage.removeItem(`quiz-timer-${stream}`);
    }

    const timer = setTimeout(() => {
      navigate('/final');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, stream]);

  return (
    <div className="code-wrapper">
      <div className="code-inner">
        <h1 className="code-word">{word}</h1>

        {isPerfect && (
          <div className={`code-badge ${isPerfect ? 'success' : 'partial'}`}>
            <span className="code-badge-text">Идеально!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWord;
