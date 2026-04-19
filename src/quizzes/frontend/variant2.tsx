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
        noPadding="left"
        left={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              width: '100%',
            }}
          >
            <p>
              В 1998 году в шуточном RFC 2324
              <br /> описали протокол HTCPCP
              <br /> для управления кофеварками.
              <br /> Вкратце, сетевое взаимодействие
              <br /> можно показать так:
            </p>

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
          <p>
            Многие веб-сервисы, например, Google, ввели в своё REST-взаимодействие эту пасхалку и
            поддерживают код ошибки 418.
            <br />
            <br /> Чем является BREW в запросе?
          </p>
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
      <MonoQuestion
        content={
          <p>
            JavaScript является однопоточным языком программирования. Если бы не этот механизм, то
            любая операция блокировала бы поток исполнения скрипта.
            <br />
            <br /> Назови <span style={{ color: '#7f42e1' }}>его</span> на английском языке.
          </p>
        }
      />
    ),
    correctAnswers: ['Event loop', 'event Loop', 'ивент луп', 'эвент луп'],
  },
  {
    id: 3,
    component: (
      <SplitQuestion
        rightImage
        left={
          <p>
            Какого названия не хватает на схеме?
            <br />
            <br /> Назови аналогом на русском.
          </p>
        }
        right={<img src={schema} alt="" />}
      />
    ),
    correctAnswers: ['Граница', 'граница', 'Границы', 'границы'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion
        content={
          <>
            Этот малыш — любимец всех мемов о frontend-разработке. Формально,
            <br /> в его названии нет упоминания, чем он на самом деле является, в отличие
            <br /> от его старшего брата. Но это не мешает энтузиастам использовать
            <br /> его как для стилизации страниц, так и для написания работающего калькулятора.
            <br />
            <br /> Чем именно он и его брат являются?
          </>
        }
      />
    ),
    correctAnswers: ['языком', 'Языком', 'язык', 'css', 'CSS', 'Css'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <p style={{ fontSize: '80px' }}>
            Это слово хорошо известно любому frontend-разработчику, хотя формально большинство из
            них не связаны с ним. Недавно среди большой тройки
            <br /> появился новичок, который уже завоевал лояльность IKEA, Apple Music,
            <br />
            Stackoverflow.
            <br />
            <br /> О какой большой тройке идёт речь? Назови одним словом.
          </p>
        }
      />
    ),
    correctAnswers: ['Фреймворк', 'фреймворк', 'framework', 'Framework', 'фремворк', 'Фремворк'],
  },
];
