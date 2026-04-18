import digging from '../../assets/digging.svg';
import google from '../../assets/google.svg';
import manmem from '../../assets/manmem.svg';
import method from '../../assets/method.svg';
import MonoQuestion from '../../components/MonoQuestion';
import SplitQuestion from '../../components/SplitQuestion';
import type { Question } from '../types';

export const dataVariant2: Question[] = [
  {
    id: 1,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '100px', width: '100%' }}>
            На знаке часть лопаты совпадает с ней. Слово «она» этимологически связано с названием
            специалиста, помогающего, например, справедливо разделить имущество. Назовите её.
          </div>
        }
        right={<img src={digging} alt="" />}
      />
    ),
    correctAnswers: ['медиана', 'Медиана'],
  },
  {
    id: 2,
    component: (
      <SplitQuestion
        left={
          <div style={{ fontSize: '120px', width: '100%' }}>Название какой модели закрыли?</div>
        }
        right={
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={google}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '808px',
                height: '269px',
                background: '#7f42e1',
                top: '60%',
                left: '420px',
                transform: 'translate(-50%, -50%)',
                borderRadius: '40px',
              }}
            />
          </div>
        }
      />
    ),
    correctAnswers: ['БЕРТ/BERT', 'Берт', 'берт', 'bert'],
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
              На картинке часть описания метода. Как он называется?
            </div>

            <img
              src={method}
              alt=""
              style={{
                width: '3440px',
                objectFit: 'cover',
              }}
            />
          </div>
        }
      />
    ),
    correctAnswers: [
      'поправка Бонферони',
      'поправка Банферони',
      'поправка Банферрони',
      'метод Бонферрони',
      'метод Бонферони',
      'Поправка Бонферрони',
    ],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        left={<div style={{ fontSize: '120px', width: '100%' }}>О чём говорит этот мужчина?</div>}
        right={<img src={manmem} alt="" />}
      />
    ),
    correctAnswers: ['вероятности', 'вероятность', 'probability', 'Вероятность'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion content="По мнению Ферми, высказанному еще в 1950-е, главной проблемой физики конца XX века будет решение нелинейных задач. Ибо в Библии не сказано, что фундаментальные законы физики должны быть... Продолжи фразу одним словом." />
    ),
    correctAnswers: ['линейный', 'линейным', 'Линейными'],
  },
];
