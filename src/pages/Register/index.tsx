import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../../assets/qrcode.svg';
import scanQr from '../../assets/scanqr.svg';
import Button from '../../components/Button';
import './Register.css';

const Register: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-images">
          <img src={scanQr} alt="Scan QR" className="register-scan-image" />
          <img src={qr} alt="QR" className="register-qr-image" />
        </div>

        <div className="register-button">
          <Button
            width="1615px"
            height="219px"
            borderRadius="100px"
            onClick={() => navigate('/rules')}
          >
            Уже есть регистрация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
