import { type FC, useState } from 'react';
import check from '../../assets/check.svg';
import darts from '../../assets/darts.svg';
import trophy from '../../assets/trophy.svg';
import './SuccessQuestion.css';

type Variant = 0 | 1 | 2;

const SuccessQuestion: FC = () => {
  const [variant] = useState<Variant>(() => {
    return Math.floor(Math.random() * 3) as Variant;
  });

  return (
    <div className="success-wrapper">
      <div className="success-content">
        <div className="success-text">
          {variant === 0 && (
            <>
              <div className="success-title">Верно!</div>

              <div className="success-subtitle">
                Тебя ещё не хантил <br />
                Друзь?
              </div>
            </>
          )}

          {variant === 1 && <div className="success-big">Шаришь!</div>}

          {variant === 2 && (
            <>
              <div className="success-subtitle">
                Тут и менять ничего <br /> не надо
              </div>

              <div className="success-big">Правильно!</div>
            </>
          )}
        </div>

        <img
          className="success-image"
          src={variant === 0 ? darts : variant === 1 ? check : trophy}
          alt="success"
        />
      </div>
    </div>
  );
};

export default SuccessQuestion;
