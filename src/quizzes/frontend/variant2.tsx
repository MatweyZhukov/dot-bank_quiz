import boys from '../../assets/boys.svg';
import kettle from '../../assets/kettle.svg';
import schema from '../../assets/schema.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const frontendVariant2: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        left={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              fontSize: '100px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div>
              В 1998 году в шуточном RFC 2324 описали протокол HTCPCP для управления кофеварками.
              Вкратце, сетевое взаимодействие можно показать так:
            </div>
            <img
              src={kettle}
              style={{
                height: '414px',
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
        }
        right={
          <div style={{ fontSize: '100px', width: '100%' }}>
            Многие веб-сервисы, например, Google, ввели в своё REST-взаимодействие эту пасхалку и
            поддерживают код ошибки 418. Чем является BREW в запросе?
          </div>
        }
      />
    ),
    correctAnswers: [
      'Метод',
      'методом',
      'Методом',
      'метод',
      'metod',
      'Metod',
      'http method',
      'request method',
      'метод запроса',
      'метод http',
      'http метод',
    ],
  },
  {
    id: 2,
    component: (
      <MonoQuestion content="JavaScript является однопоточным языком программирования. Если бы не этот механизм, то любая операция блокировала бы поток исполнения скрипта. Назови ЕГО на английском языке." />
    ),
    correctAnswers: ['Event loop', 'event Loop', 'ивент луп', 'эвент луп'],
  },
  {
    id: 3,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '100px', width: '100%' }}>
            Какого названия не хватает на схеме? Назови аналогом на русском.
          </div>
        }
        right={<img src={schema} alt="" />}
      />
    ),
    correctAnswers: ['Граница', 'граница', 'Границы', 'границы'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion content="Этот малыш — любимец всех мемов о frontend-разработке. Формально, в его названии нет упоминания, чем он на самом деле является, в отличие от его старшего брата. Но это не мешает энтузиастам использовать его как для стилизации страниц, так и для написания работающего калькулятора. Чем именно он и его брат являются?" />
    ),
    correctAnswers: ['языком', 'Языком', 'язык'],
  },
  {
    id: 5,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>
            Что использовали, чтобы добиться такого эффекта? Напиши ответ на русском языке.
          </div>
        }
        right={<img src={boys} alt="" />}
      />
    ),
    correctAnswers: [
      'Строгий режим (use strict / strict mode)',
      'use strict / strict mode',
      'строгий режим js',
      'режим strict',
      'js',
    ],
  },
];
