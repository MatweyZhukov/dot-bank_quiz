import computers from '../../assets/computers.svg';
import dots from '../../assets/dots.svg';
import formula from '../../assets/formula.svg';
import historyman from '../../assets/historyman.svg';
import pleasantmem from '../../assets/pleasantmem.svg';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const dataVariant1: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        rightImage
        left={<p>О чём идет речь на картинке? Ответ из двух слов.</p>}
        right={<img src={computers} alt="" />}
      />
    ),
    correctAnswers: [
      'мл',
      'Машинное обучение',
      'машиное обучение',
      'ML',
      'ml',
      'Machine Learning',
      'machine learning',
      'машинное обучение',
    ],
  },
  {
    id: 2,
    component: (
      <SplitQuestion
        rightImage
        left={
          <p style={{ fontSize: '85px' }}>
            Напиши на русском слово, которое
            <br /> мы закрыли на меме.
          </p>
        }
        right={<img src={pleasantmem} alt="" />}
      />
    ),
    correctAnswers: ['градиент', 'gradient', 'Градиент'],
  },
  {
    id: 3,
    component: (
      <SplitQuestion
        rightImage
        left={<p>Выражение для… ?</p>}
        right={<img src={formula} alt="" />}
      />
    ),
    correctAnswers: ['энтропия', 'entropy', 'Энтропия', 'энтропии'],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        rightImage
        left={<p>Импортозамещенное название для Scatterplot.</p>}
        right={<img src={dots} alt="" />}
      />
    ),
    correctAnswers: [
      'Диаграмма рассеяния',
      'диаграмма рассеяния',
      'диаграма рассеяния',
      'диаграма расеяния',
      'график рассеяния',
    ],
  },
  {
    id: 5,
    component: (
      <SplitQuestion
        rightImage
        left={
          <p>
            Назови фамилию этого совсем
            <br /> не наивного мужчины.
          </p>
        }
        right={<img src={historyman} alt="" />}
      />
    ),
    correctAnswers: ['Баес', 'Байс', 'Баэс', 'Баэз', 'байэз', 'Баез', 'Байез', 'Байес', 'Байз'],
  },
];
