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
        rightImage
        left={
          <p style={{ fontSize: '70px' }}>
            Во вселенной «Матрицы» был
            <br /> персонаж-программа, который
            <br /> помогал другим программам
            <br /> скрываться от удаления системой.
            <br />
            <br /> Он любил контроль, причинно-следственные связи и пафосные монологи.
            <br />
            <br /> Как его звали?
          </p>
        }
        right={<img src={human} alt="" />}
      />
    ),
    correctAnswers: ['Merovingian', 'Merovingien', 'меровинг', 'Меровинген'],
  },
  {
    id: 2,
    component: (
      <MonoQuestion
        content={
          <>
            Стартап с оценкой больше $1 млрд.
            <br />
            Какое мифическое существо стало его прозвищем?
          </>
        }
      />
    ),
    correctAnswers: ['Единорог', 'unicorn'],
  },
  {
    id: 3,
    component: (
      <MonoQuestion
        content={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>
              Какой популярный мультфильм объединяет работы этих итальянских
              <br /> художников и пиццу?
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '48px',
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
      <MonoQuestion
        content={
          <p style={{ textAlign: 'left' }}>
            Когда шторм разносит нас в разные стороны, есть то, что держит нас
            <br />
            вместе и не даёт уплыть. В Точка Банке это слово обозначает главный «круг», в который
            входит главная команда лидеров.
            <br />
            <br />
            Что это?
          </p>
        }
      />
    ),
    correctAnswers: ['якорь', 'Якорь', 'Якорный круг'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <>
            Зелёный наставник из «Звёздных войн»,
            <br /> чья фраза «Do or do not, there is no try» стала мантрой стартаперов?
          </>
        }
      />
    ),
    correctAnswers: ['Yoda', 'йода'],
  },
];
