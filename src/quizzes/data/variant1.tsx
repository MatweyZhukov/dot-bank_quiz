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
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>
            О чём идет речь на картинке? Ответ из двух слов.
          </div>
        }
        right={<img src={computers} alt="" />}
      />
    ),
    correctAnswers: [
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
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>
            Напиши на русском слово, которое мы закрыли на меме.
          </div>
        }
        right={<img src={pleasantmem} alt="" />}
      />
    ),
    correctAnswers: ['градиент', 'gradient'],
  },
  {
    id: 3,
    component: (
      <SplitQuestion
        left={<div style={{ fontSize: '120px', width: '100%' }}>Выражение для… ?</div>}
        right={<img src={formula} alt="" />}
      />
    ),
    correctAnswers: ['энтропия', 'entropy'],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>
            Импортозамещенное название для Scatterplot.
          </div>
        }
        right={<img src={dots} alt="" />}
      />
    ),
    correctAnswers: ['энтропия', 'entropy'],
  },
  {
    id: 5,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>
            Назови фамилию этого совсем не наивного мужчины.
          </div>
        }
        right={<img src={historyman} alt="" />}
      />
    ),
    correctAnswers: ['Баес', 'Байс', 'Баэс', 'Баэз', 'байэз', 'Баез', 'Байез'],
  },
];
