import MonoQuestion from '../../components/MonoQuestion';
import type { Question } from '../types';

export const productVariant1: Question[] = [
  {
    id: 1,
    component: (
      <MonoQuestion content="Статичный макет, который показывает визуальный дизайн, но не кликается — это не прототип и не вайрфрейм, а ___?" />
    ),
    correctAnswers: ['mock up', 'mockup', 'мок ап', 'макет', 'mock-up', 'Мокап'],
  },
  {
    id: 2,
    component: (
      <MonoQuestion content="Человек в компании, который продвигает продукт или технологию с миссионерским энтузиазмом." />
    ),
    correctAnswers: ['евенгелист', 'Евангелист '],
  },
  {
    id: 3,
    component: (
      <MonoQuestion
        content={
          <>
            Датчанин, соавтор термина «discount usability engineering»,
            <br /> 10 правил юзабилити кого?
            <br />
            <br /> Напиши фамилию.
          </>
        }
      />
    ),
    correctAnswers: [
      'Нильсен',
      'Нильсон',
      'Нильсен',
      'Nielsen',
      'Nilsen',
      'Nielson',
      'Якоб Нильсен',
      'Якоб Нильсон',
      'jakob nielsen',
    ],
  },
  {
    id: 4,
    component: (
      <MonoQuestion
        content={
          <>
            Когнитивное искажение: пользователь видит «Было 9 990 ₽, стало 4 990 ₽» и воспринимает
            цену как выгодную. <br />
            <br />
            Как называется этот эффект?
          </>
        }
      />
    ),
    correctAnswers: ['якорение', 'anchoring', 'эффект якоря', 'Якорение'],
  },
  {
    id: 5,
    component: (
      <MonoQuestion
        content={
          <>
            Практика из Кремниевой долины, которую Google и Apple внедрили в офисах для фокусировки
            команд.
            <br />
            <br /> Четыре буквы.
          </>
        }
      />
    ),
    correctAnswers: ['Йога'],
  },
];
