import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import threecoins from '../../assets/threecoins.svg';
import logo from '../../assets/tochka_bank_cyr_one_line.svg';
import './Final.css';

const Final: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="final-wrapper">
      <div className="final-content">
        <h1 className="final-title">ВАУ-ВАУ,</h1>

        <h2 className="final-subtitle">
          А ТЕПЕРЬ ВОЗЬМИ
          <br /> МОНЕТКИ
        </h2>

        <p className="final-text">
          Монетки за квиз начисляются только один раз.
          <br /> Но при желании ты можешь пройти его снова!)
        </p>
      </div>

      <img className="finalLogo" src={logo} alt="Tochka Bank logo" />

      <img className="threecoins" src={threecoins} alt="three coins" />
    </div>
  );
};

export default Final;
