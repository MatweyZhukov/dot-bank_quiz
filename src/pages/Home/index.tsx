import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/tochka_bank_cyr_one_line.svg';
import reshat from '../../assets/решать.svg';
import tebe from '../../assets/тебе.svg';
import Button from '../../components/Button';
import './Home.css';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img className="logo" src={logo} alt="Tochka Bank logo" />

      <div className="sub-images">
        <img className="sub-image tebe" src={tebe} alt="Tebe" />
        <img className="sub-image reshat" src={reshat} alt="Reshat" />
      </div>

      <Button onClick={() => navigate('/rules')} width="1072px" height="216px" borderRadius="100px">
        Начать
      </Button>
    </div>
  );
};

export default Home;
