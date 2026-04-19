import { type FC, useState } from 'react';
import mistake from '../../assets/mistake.svg';
import type { StreamKey } from '../../quizzes/types';
import './FailureQuestion.css';

type Variant = 0 | 1 | 2;

const getFailureCursorKey = (stream?: StreamKey) =>
  stream ? `failure-variant-cursor-${stream}` : 'failure-variant-cursor-default';

const FailureQuestion: FC = () => {
  const stream = (history.state?.usr?.stream || undefined) as StreamKey | undefined;

  const [variant] = useState<Variant>(() => {
    const key = getFailureCursorKey(stream);

    const current = Number(localStorage.getItem(key) || 0);
    const next = ((current + 1) % 3) as Variant;

    localStorage.setItem(key, String(next));

    return next;
  });

  return (
    <div className="failure-wrapper">
      <div className="failure-content">
        <div className="failure-text">
          {variant === 0 && (
            <>
              <div className="failure-big">Не туда</div>

              <div className="failure-subtitle">
                Но уже ничего <br />
                не поменять
              </div>
            </>
          )}

          {variant === 1 && (
            <>
              <div className="failure-subtitle">Правильный ответ</div>

              <div className="failure-big">Не накопался</div>
            </>
          )}

          {variant === 2 && (
            <>
              <div className="failure-subtitle">
                Если бы можно было <br />
                поменять ответ...
              </div>

              <div className="failure-big">Но нет!</div>
            </>
          )}
        </div>

        <img
          className={`failure-image ${variant === 1 ? 'is-shifted' : ''}`}
          src={mistake}
          alt="mistake"
        />
      </div>
    </div>
  );
};

export default FailureQuestion;
