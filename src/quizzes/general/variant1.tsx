import arms from '../../assets/arms.svg';
import human from '../../assets/human.svg';
import monalisa from '../../assets/monalisa.svg';
import people from '../../assets/people.svg';
import statue from '../../assets/statue.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const generalVariant1: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '100px', width: '100%' }}>
            Во вселенной «Матрицы» был персонаж-программа, который помогал другим программам
            скрываться от удаления системой. Он любил контроль, причинно-следственные связи и
            пафосные монологи. Как его звали?
          </div>
        }
        right={<img src={human} alt="" />}
      />
    ),
    correctAnswers: ['Merovingian', 'Merovingien', 'меровинг', 'Меровинген'],
  },
  {
    id: 2,
    component: (
      <MonoQuestion content="Стартап с оценкой больше $1 млрд. Какое мифическое существо стало его прозвищем?" />
    ),
    correctAnswers: ['Единорог', 'unicorn'],
  },
  {
    id: 3,
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
            <div style={{ fontSize: '90px', maxWidth: '90%' }}>
              Какой популярный мультфильм объединяет работы этих итальянских художников и пиццу?
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '40px',
              }}
            >
              <img src={arms} style={{ height: '504px', objectFit: 'contain' }} />
              <img src={monalisa} style={{ height: '704px', objectFit: 'contain' }} />
              <img src={people} style={{ height: '704px', objectFit: 'contain' }} />
              <img src={statue} style={{ height: '510px', objectFit: 'contain' }} />
            </div>
          </div>
        }
      />
    ),
    correctAnswers: ['черепашки нинзя', 'черепашки ниндзя', 'черепашки-нинзя', 'Черепашки-ниндзя'],
  },
  {
    id: 4,
    component: (
      <MonoQuestion content="Когда шторм разносит нас в разные стороны, есть то, что держит нас вместе и не даёт уплыть. В Точка Банке это слово обозначает главный «круг», в который входит главная команда лидеров. Что это?" />
    ),
    correctAnswers: ['якорь', 'Якорь', 'Якорный круг'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion content="Зелёный наставник из «Звёздных войн», чья фраза «Do or do not, there is no try» стала мантрой стартаперов?" />
    ),
    correctAnswers: ['Yoda', 'йода'],
  },
];
