import { times, sample, sampleSize } from "lodash";
const ALPHABETS = (() => {
  var first = "A".charCodeAt(0);
  var last = "Z".charCodeAt(0);
  var result = new Array();
  for (var i = first; i <= last; i++) {
    result.push(String.fromCodePoint(i));
  }
  return result;
})();

export type Question = {
  answers: ReadonlyArray<string>;
  collect: string;
};

const generateQuestion = (): Question => {
  const answers = sampleSize(ALPHABETS, 4);
  const collect = sample(answers);
  return { answers, collect };
};
export function useQuestion(size = 10) {
  const questions: Array<Question> = times(size, generateQuestion);
  console.log(questions);

  return { questions };
}
