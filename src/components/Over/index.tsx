import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Over.css';

const Over: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="over-wrapper">
      <div className="over-content">
        <h1 className="over-title">ТИК-ТАК</h1>

        <h2 className="over-subtitle">
          ВРЕМЯ ИСТЕКЛО,
          <br />
          НО В СЛЕДУЮЩЕМ ВОПРОСЕ ПОВЕЗЕТ БОЛЬШЕ
        </h2>
      </div>
    </div>
  );
};

export default Over;
