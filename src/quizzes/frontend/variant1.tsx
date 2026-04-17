import mem from '../../assets/mem.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const frontendVariant1: Question[] = [
  {
    id: 1,
    component: (
      <MonoQuestion content="Эта техника — настоящий «чит-код» для производительности интерфейсов. Вместо того, чтобы каждый раз честно выполнять тяжелые вычисления, например, сложную фильтрацию большого массива, функция просто запоминает результат для конкретных входных данных. Если данные не изменились, она сразу выдает готовый ответ из кэша,не тратя ресурсы процессора. В React для этого есть специальный хук, а в обычном JavaScript это реализуется через замыкания. Назови этот процесс." />
    ),
    correctAnswers: ['Мемоизация', 'memoization'],
  },
  {
    id: 2,
    component: (
      <SplitQuestion
        left={<div style={{ fontSize: '120px', width: '100%' }}>О чём идет речь на меме?</div>}
        right={<img src={mem} alt="" />}
      />
    ),
    correctAnswers: [
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
      <MonoQuestion content="Все мы любим JS в том числе за мемы. Одна из странных, но типичных для JS вещей видна в примере ниже: > ('b'+'a'++ 'y') Какой фрукт появится в консоли?" />
    ),
    correctAnswers: ['банан', 'banana', 'baNaNa', 'banan'],
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
      <MonoQuestion content="Это слово хорошо известно любому frontend-разработчику, хотя формально большинство из них не связаны с ним. Недавно среди большой тройки появился новичок, который уже завоевал лояльность IKEA, Apple Music, Stackoverflow. О какой большой тройке идёт речь? Назови одним словом." />
    ),
    correctAnswers: ['фреймворк', 'framework', 'Framework', 'фремворк', 'Фремворк'],
  },
];
