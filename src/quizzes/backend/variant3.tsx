import code from '../../assets/code.svg';
import spidermen from '../../assets/spidermen.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const backendVariant3: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        left={
          <div>
            В тесте не используется реальный платёжный шлюз. Вместо него передаётся объект, который
            имитирует поведение. Как называется такой объект?
          </div>
        }
        right={<img src={code} alt="" />}
      />
    ),
    correctAnswers: ['мок', 'moc', 'Moc', 'mok', 'Mok', 'MOK', 'mock', 'заглушка', 'моки', 'Мок'],
  },
  {
    id: 2,
    component: (
      <SplitQuestion
        left={
          <div>
            Каждый ждёт, пока другой уступит. Оба уверены, что правы. Никто не двигается. Любой
            бэкендер сталкивался с этим в базах и потоках. Одно слово.
          </div>
        }
        right={<img src={spidermen} alt="" />}
      />
    ),
    correctAnswers: [
      'Дедлок (deadlock)',
      'дэдлок',
      'дедлок',
      'dedlock',
      'dedlok',
      'dedloc',
      'deadlok',
      'deadloc',
      'Deadlock',
      'дед лок',
      'дэд лок',
    ],
  },
  {
    id: 3,
    component: <MonoQuestion content="Billion dollar mistake. Что это?" />,
    correctAnswers: ['nul', 'Nul', 'zero', 'null', 'NULL', 'Null'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion
        content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '60px',
              fontSize: '120px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
              }}
            >
              <span>📖</span>
              <span>←</span>
              <span>✏️</span>
              <span>→</span>
              <span>📖</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <span>↓</span>
              <span>📖</span>
            </div>
            <div
              style={{
                fontSize: '90px',
                lineHeight: 1.2,
              }}
            >
              Один пишет, остальные копируют. Процесс копирования называется…
            </div>
          </div>
        }
      />
    ),
    correctAnswers: [
      'Репликация',
      'репликация',
      'репликацией',
      'Репликацией',
      'репликация данных',
      'data replication',
      'replication',
    ],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          'Библиотеку разработчик вызывает сам. Здесь - наоборот: код разработчика вызывается автоматически. Контроллер достаточно написать - он будет найден и запущен. Роут достаточно описать - он будет зарегистрирован. Главный принцип - Inversion of Control. Что это?'
        }
      />
    ),
    correctAnswers: [
      'Фреймворк',
      'фреймворк',
      'framework',
      'Framework',
      'фремворк',
      'Фремворк',
      'web framework',
      'backend framework',
    ],
  },
];
