import memory from '../../assets/memory.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const backendVariant2: Question[] = [
  {
    id: 1,
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
            <p style={{ fontSize: '180px', textAlign: 'left', width: '100%' }}>
              🧵🧵🧵🧵 → 🔒 → 💥
            </p>

            <p style={{ fontSize: '90px', lineHeight: 1.2, textAlign: 'left' }}>
              Четыре нити, один замок, проблема.
              <br /> Но сам подход называется...
            </p>
          </div>
        }
      />
    ),
    correctAnswers: [
      'многопоточность',
      'многопАточность',
      'multithreading',
      'многопоток',
      'multithreding',
      'мультитрединг',
      'Многопоточность',
    ],
  },
  {
    id: 2,
    component: (
      <MonoQuestion
        content={
          <>
            Может жить на засыпающем ноутбуке под кроватью, на Mac Mini,
            <br /> на виртуалке или в облаке. На них запускают Telegram-ботов, Minecraft
            <br /> и продакшен на 10 миллионов пользователей. Слушает порт и отвечает.
            <br />
            <br /> Что это?
          </>
        }
      />
    ),
    correctAnswers: ['сервер', 'серверы', 'Серверы', 'server', 'Server', 'web server', 'Сервер'],
  },
  {
    id: 3,
    component: (
      <MonoQuestion
        content={
          <>
            Это стоит перед вашими сервисами. Раздаёт запросы, отдаёт статику, терминирует SSL. Его
            конфиг — это location, upstream и proxy_pass.
            <br />
            <br /> Что это?
          </>
        }
      />
    ),
    correctAnswers: ['nginx', 'ngnix', 'нгинкс', 'нжинкс', 'Nginx'],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        rightImage
        left={<p>Чего не хватило поду?</p>}
        right={<img src={memory} alt="" />}
      />
    ),
    correctAnswers: ['Память', 'память', 'Памяти', 'памяти'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <div
            style={{
              gap: '60px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p style={{ fontSize: '180px', lineHeight: 1 }}>🌍 → 🚪 → 🖥🖥🖥🖥</p>

            <p style={{ fontSize: '90px', lineHeight: 1.2 }}>
              Весь внешний трафик входит в одну дверь, а за ней — десяток сервисов.
              <br /> Эта дверь называется…
            </p>
          </div>
        }
      />
    ),
    correctAnswers: [
      'API Gateway (Гейтвей)',
      'апи гетевей',
      'апи гетевэй',
      'апи гетэвэй',
      'апи гейтевей',
      'апи гейтвей',
      'api gatewey',
      'api gateaway',
      'api Gateway',
      'api Gatewey',
      'API Gatewey',
      'API Gateway',
      'апи гатевей',
      'gateway api',
    ],
  },
];
