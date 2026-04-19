import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import stream from '../../assets/stream.svg';
import Button from '../../components/Button';
import './Streams.css';

const Streams: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="streams">
      <Button
        className="streams-rules-btn"
        width="auto"
        height="auto"
        borderRadius="100px"
        onClick={() => navigate('/rules')}
      >
        Вернуться к правилам
      </Button>

      <h1 className="streams-title">ВЫБЕРИ СТРИМ</h1>

      <div className="streams-grid">
        <Button
          width="1502px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/quiz/backend')}
        >
          Бэкенд
        </Button>

        <Button
          width="1502px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/quiz/frontend')}
        >
          Фронтенд
        </Button>

        <Button
          width="1502px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/quiz/product')}
        >
          Продакт-менеджмент
        </Button>

        <Button
          width="1502px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/quiz/data')}
        >
          Дата-сайенс
        </Button>

        <Button
          width="1502px"
          height="216px"
          borderRadius="100px"
          onClick={() => navigate('/quiz/general')}
        >
          Общий
        </Button>
      </div>

      <img className="streams-image" src={stream} alt="stream" />
    </div>
  );
};

export default Streams;
