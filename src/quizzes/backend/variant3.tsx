import code from '../../assets/code.svg';
import spidermen from '../../assets/spidermen.png';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const backendVariant3: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        rightImage
        left={
          <p>
            В тесте не используется реальный
            <br /> платёжный шлюз.
            <br /> Вместо него передаётся объект,
            <br /> который имитирует поведение.
            <br />
            <br /> Как называется такой объект?
          </p>
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
        rightImage
        left={
          <p style={{ fontSize: '80px' }}>
            Каждый ждёт, пока другой уступит.
            <br /> Оба уверены, что правы.
            <br /> Никто не двигается.
            <br /> Любой бэкендер сталкивался
            <br /> с этим в базах и потоках.
            <br />
            <br /> Одно слово.
          </p>
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
    component: (
      <MonoQuestion
        content={
          <>
            Billion dollar mistake.
            <br />
            <br /> Что это?
          </>
        }
      />
    ),
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
          <>
            Библиотеку разработчик вызывает сам.
            <br /> Здесь - наоборот: код разработчика вызывается автоматически.
            <br /> Контроллер достаточно написать - он будет найден и запущен.
            <br /> Роут достаточно описать - он будет зарегистрирован.
            <br /> Главный принцип - Inversion of Control.
            <br />
            <br /> Что это?
          </>
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
