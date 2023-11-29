import QuestionsArrayList from "./questions-list";

const getRandomQuestion = (level) => {
  const filteredQuestions = QuestionsArrayList.filter((question) => question.level === level);
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};

export default getRandomQuestion;
