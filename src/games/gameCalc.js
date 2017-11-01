import { cons } from 'hexlet-pairs';
import randomFunction from '../utils';
import flow from '..';

const randomCalc = () => {
  const firstNumber = randomFunction(100);
  const secondNumber = randomFunction(100);
  let sign;
  let answerRight;

  switch (randomFunction(3)) {
    case 1:
      sign = '+';
      answerRight = firstNumber + secondNumber;
      break;
    case 2:
      sign = '-';
      answerRight = firstNumber - secondNumber;
      break;
    default:
      sign = '*';
      answerRight = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  return cons(question, String(answerRight));
};

const gameCalc = () => {
  const getQuestionPair = () => randomCalc();
  const rulesCalc = 'What is the result of the expression?';
  const rightAnswersCount = 3;
  return flow(rulesCalc, getQuestionPair, rightAnswersCount);
};

export default gameCalc;
