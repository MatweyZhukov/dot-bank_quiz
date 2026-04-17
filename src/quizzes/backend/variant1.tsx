import deer from '../../assets/deer.svg';
import endpoints from '../../assets/endpoints.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const backendVariant1: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        left={<div style={{ fontSize: '140px', width: '100%' }}>👀 + 📊 + 🚨 = ?</div>}
        right={<img src={deer} alt="" />}
      />
    ),
    correctAnswers: ['мониторинг', 'monitoring', 'monitoring system', 'elk', 'elk stack'],
  },
  {
    id: 2,
    component: <MonoQuestion content={<img src={endpoints} alt="" />} />,
    correctAnswers: ['эндпоинт', 'ендпоинт', 'endpoint', 'эндпоин'],
  },
  {
    id: 3,
    component: (
      <MonoQuestion content="Первая, вторая, третья форма... Я разбиваю одну толстую таблицу на несколько связанных, чтобы убить дублирование. Что за процесс?" />
    ),
    correctAnswers: ['нормализация', 'normalization'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion content="Отступы — его пунктуация. Табы — его враг. Один лишний пробел — и ничего не работает. Docker-compose и Kubernetes без этого не живут. Что это?" />
    ),
    correctAnswers: ['yaml', 'Y A M L', 'y a m l', 'Y a m l', 'YML', 'yamal', 'ямл'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '60px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '120px', lineHeight: 1 }}>
              📡 → 🖥 → 🖥 → 🖥 → 🖥 🔍👣👣👣👣
            </div>

            <div style={{ fontSize: '90px', lineHeight: 1.2 }}>
              Следить за путём запроса через цепочку сервисов — это…
            </div>
          </div>
        }
      />
    ),
    correctAnswers: [
      'трейсинг',
      'трэйсинг',
      'Трэйсинг',
      'tracing',
      'Tracing',
      'distributed tracing',
      'trace',
      'tracing system',
      'трассировка',
    ],
  },
];
