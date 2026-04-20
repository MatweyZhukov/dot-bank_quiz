import deer from '../../assets/deer.png';
import endpoints from '../../assets/endpoints.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const backendVariant1: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        rightImage
        left={<p style={{ fontSize: '190px' }}>👀 + 📊 + 🚨 = ?</p>}
        right={<img src={deer} alt="" />}
      />
    ),
    correctAnswers: [
      'мониторинг',
      'monitoring',
      'Monitoring',
      'monitoring system',
      'мониторингинг',
      'монитроинг',
      'монитринг',
      'монитроринг',
      'system monitoring',
      'service monitoring',
      'elk',
      'elk стек',
      'elk stack',
      'Мониторинг',
    ],
  },
  {
    id: 2,
    component: <MonoQuestion content={<img src={endpoints} alt="" />} />,
    correctAnswers: ['Endpoint', 'эндпоинт', 'ендпоинт', 'endpoint', 'эндпоин'],
  },
  {
    id: 3,
    component: (
      <MonoQuestion
        content={
          <>
            Первая, вторая, третья форма...
            <br /> Я разбиваю одну толстую таблицу на несколько связанных,
            <br /> чтобы убить дублирование.
            <br />
            <br /> Что за процесс?
          </>
        }
      />
    ),
    correctAnswers: ['нормализация', 'normalization', 'Нормализация'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion
        content={
          <>
            Отступы — его пунктуация. Табы — его враг.
            <br /> Один лишний пробел — и ничего не работает.
            <br /> Docker-compose и Kubernetes без этого не живут.
            <br />
            <br /> Что это?
          </>
        }
      />
    ),
    correctAnswers: ['YAML', 'yaml', 'Y A M L', 'y a m l', 'Y a m l', 'YML', 'yamal', 'ямл'],
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
              gap: '60px',
            }}
          >
            <p style={{ fontSize: '170px' }}>📡 → 🖥 → 🖥 → 🖥 → 🖥 🔍👣👣👣👣</p>

            <p style={{ fontSize: '90px', lineHeight: 1.2 }}>
              Следить за путём запроса через цепочку сервисов — это…
            </p>
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
      'Трейсинг',
    ],
  },
];
