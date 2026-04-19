import { type FC, useState } from 'react';
import mistake from '../../assets/mistake.svg';
import './FailureQuestion.css';

type Variant = 0 | 1 | 2;

const FailureQuestion: FC = () => {
  const [variant] = useState<Variant>(() => {
    return Math.floor(Math.random() * 3) as Variant;
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
