export type Question = {
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  collect: string;
};

export function useQuestion() {
  const questions: Array<Question> = [
    {
      a1: "A",
      a2: "B",
      a3: "C",
      a4: "D",
      collect: "A",
    },
    {
      a1: "J",
      a2: "R",
      a3: "W",
      a4: "Z",
      collect: "W",
    },
  ];

  return { questions };
}
