import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import coins from '../../assets/coins.svg';
import Button from '../../components/Button';
import './Rules.css';

const Rules: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="rules">
      <h1 className="rules-title">ПРАВИЛА ПРОСТЫЕ</h1>

      <div className="rules-card">
        <ul className="rules-grid">
          <li className="rule-item">
            <span className="rule-dot" />
            <p>
              5 вопросов, на каждый
              <br />
              вопрос по минуте
            </p>
          </li>

          <li className="rule-item">
            <span className="rule-dot" />
            <p>
              Ответ — слово на русском
              <br /> или английском языке
            </p>
          </li>

          {/* 🔥 ПОДСПИСОК */}
          <li className="rule-item">
            <span className="rule-dot" />

            <div className="rule-content">
              <p>Выберите стрим:</p>

              <ul className="rule-sublist">
                <li>бэкенд</li>
                <li>фронтенд</li>
                <li>продакт-менеджмент</li>
                <li>дата-сайенс</li>
                <li>общий</li>
              </ul>
            </div>
          </li>

          <li className="rule-item">
            <span className="rule-dot" />
            <p>
              За прохождение получишь
              <br /> 3 монетки для обмена
              <br /> в магазине мерча
            </p>
          </li>
        </ul>
      </div>

      <div className="rules-actions">
        <Button
          width="1200px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/streams')}
        >
          Выбрать стрим
        </Button>

        <Button
          width="216px"
          height="216px"
          borderRadius="50%"
          onClick={() => navigate('/streams')}
        >
          →
        </Button>
      </div>

      <img className="rules-coins" src={coins} alt="coins" />
    </div>
  );
};

export default Rules;
