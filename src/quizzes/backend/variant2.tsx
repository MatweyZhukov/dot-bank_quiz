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
              alignItems: 'center',
              gap: '60px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '120px', lineHeight: 1 }}>🧵🧵🧵🧵 → 🔒 → 💥</div>

            <div style={{ fontSize: '90px', lineHeight: 1.2 }}>
              Четыре нити, один замок, проблема. Но сам подход называется...
            </div>
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
      <MonoQuestion content="Может жить на засыпающем ноутбуке под кроватью, на Mac Mini, на виртуалке или в облаке. На них запускают Telegram-ботов, Minecraft и продакшен на 10 миллионов пользователей. Слушает порт и отвечает. Что это?" />
    ),
    correctAnswers: ['сервер', 'серверы', 'Серверы', 'server', 'Server', 'web server', 'Сервер'],
  },
  {
    id: 3,
    component: (
      <MonoQuestion content="Это стоит перед вашими сервисами. Раздаёт запросы, отдаёт статику, терминирует SSL. Его конфиг — это location, upstream и proxy_pass. Что это?" />
    ),
    correctAnswers: ['nginx', 'ngnix', 'нгинкс', 'нжинкс', 'Nginx'],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        left={<div style={{ fontSize: '120px', width: '100%' }}>Чего не хватило поду?</div>}
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '60px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '120px', lineHeight: 1 }}>🌍 → 🚪 → 🖥🖥🖥🖥</div>

            <div style={{ fontSize: '90px', lineHeight: 1.2 }}>
              Весь внешний трафик входит в одну дверь, а за ней — десяток сервисов. Эта дверь
              называется…
            </div>
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
