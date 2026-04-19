import { useEffect, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { StreamKey } from '../../quizzes/types';
import './CodeWord.css';

const CodeWord: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const results: boolean[] = location.state?.results || [];
  const stream = location.state?.stream as StreamKey | undefined;

  const [showFullWord, setShowFullWord] = useState(false);

  const correctCount = results.filter(Boolean).length;

  const maskedWord = ['М', 'Е', 'Н', 'Я', 'Й']
    .map((letter, index) => (results[index] ? letter : '_'))
    .join('');

  useEffect(() => {
    if (stream) {
      localStorage.removeItem(`quiz-${stream}`);
      localStorage.removeItem(`quiz-question-timer-${stream}`);
      localStorage.removeItem(`quiz-question-index-${stream}`);
    }

    const showTimer = setTimeout(() => {
      setShowFullWord(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, [stream]);

  useEffect(() => {
    if (!showFullWord) return;

    const finalTimer = setTimeout(() => {
      navigate('/final');
    }, 10000);

    return () => clearTimeout(finalTimer);
  }, [showFullWord, navigate]);

  return (
    <div className="code-wrapper">
      <div className="code-inner">
        <h1 className={`code-word code-word--masked ${showFullWord ? 'fade-out' : 'fade-in'}`}>
          {maskedWord}
        </h1>

        <h1 className={`code-word code-word--full ${showFullWord ? 'fade-in' : 'fade-out'}`}>
          МЕНЯЙ
        </h1>

        {correctCount === 5 && (
          <div className={`code-badge ${showFullWord ? 'code-badge--visible' : ''}`}>
            <span className="code-badge-text">Идеально!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWord;
