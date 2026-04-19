import boys from '../../assets/boys.svg';
import mem from '../../assets/mem.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const frontendVariant1: Question[] = [
  {
    id: 1,
    component: (
      <MonoQuestion
        content={
          <p style={{ fontSize: '90px', lineHeight: 1 }}>
            Эта техника — настоящий «чит-код» для производительности интерфейсов. Вместо того, чтобы
            каждый раз честно выполнять тяжелые вычисления, например, сложную фильтрацию большого
            массива, функция просто запоминает результат для конкретных входных данных.
            <br />
            <br /> Если данные не изменились, она сразу выдает готовый ответ из кэша, <br />
            не тратя ресурсы процессора. В React для этого есть специальный хук,
            <br /> а в обычном JavaScript это реализуется через замыкания.
            <br />
            <br /> Назови этот процесс.
          </p>
        }
      />
    ),
    correctAnswers: ['Мемоизация', 'memoization'],
  },
  {
    id: 2,
    component: (
      <SplitQuestion
        noPadding="both"
        left={<p style={{ padding: '156px 124px' }}>О чём идет речь на меме?</p>}
        right={<img style={{ margin: '0 auto' }} src={mem} alt="" />}
      />
    ),
    correctAnswers: [
      'Render tree',
      'render tree',
      'render tre',
      'рендер три',
      'дерево рендеринга',
      'рендеринг',
      'rendering',
      'render tree structure',
      'dom render tree',
      'дерево рендера',
      'рендер дерево',
      'render-tree',
    ],
  },
  {
    id: 3,
    component: (
      <MonoQuestion
        content={
          <>
            Все мы любим JS в том числе за мемы.
            <br /> Одна из странных, но типичных для JS вещей видна в примере ниже:
            <br />
            <br /> {'>'} ('b'+'a'++ 'y')
            <br />
            <br /> Какой фрукт появится в консоли?
          </>
        }
      />
    ),
    correctAnswers: ['Банан (baNaN)', 'банан', 'banana', 'baNaNa', 'banan'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion
        content={
          <>
            Этот малыш — любимец всех мемов о frontend-разработке.
            <br /> Формально, в его названии нет упоминания, чем он на самом деле
            <br /> является, в отличие от его старшего брата. Но это не мешает энтузиастам
            <br />
            использовать его как для стилизации страниц, так и для написания работающего
            калькулятора.
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
      <SplitQuestion
        rightImage
        left={
          <p style={{ fontSize: '80px' }}>
            Что использовали, чтобы добиться
            <br /> такого эффекта?
            <br />
            <br /> Напиши ответ на русском языке.
          </p>
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
      'strict mode',
      'строгий режим',
    ],
  },
];
