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
        paddingRight="93px"
        rightImage
        left={
          <p style={{ fontSize: '88px' }}>
            На знаке часть лопаты совпадает
            <br /> с ней. Слово «она» этимологически связано с названием специалиста, помогающего,
            например, справедливо разделить имущество.
            <br />
            <br /> Назовите её.
          </p>
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
        rightImage
        left={<p>Название какой модели закрыли?</p>}
        right={
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              position: 'relative',
              width: '100%',
              backgroundColor: '#dedd11',
            }}
          >
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
                width: '850px',
                height: '269px',
                background: '#7f42e1',
                top: '60%',
                left: '470px',
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
      <SplitQuestion
        rightImage
        direction="vertical"
        left={<p>На картинке часть описания метода. Как он называется?</p>}
        right={<img src={method} alt="" style={{ width: '3440px', objectFit: 'cover' }} />}
      />
    ),
    correctAnswers: [
      'поправка Бонферони',
      'поправка Банферони',
      'поправка Банферрони',
      'метод Бонферрони',
      'метод Бонферони',
      'Поправка Бонферрони',
      'метод Банферони',
    ],
  },
  {
    id: 4,
    component: (
      <SplitQuestion
        rightImage
        left={<p>О чём говорит этот мужчина?</p>}
        right={<img src={manmem} alt="" />}
      />
    ),
    correctAnswers: ['вероятности', 'вероятность', 'probability', 'Вероятность'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <>
            По мнению Ферми, высказанному еще в 1950-е, главной проблемой физики конца XX века будет
            решение нелинейных задач. Ибо в Библии не сказано, что фундаментальные законы физики
            должны быть...
            <br />
            <br />
            Продолжи фразу одним словом.
          </>
        }
      />
    ),
    correctAnswers: ['линейный', 'линейным', 'Линейными'],
  },
];
