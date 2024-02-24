import React from 'react'

const QUESTIONS = [
  {
    question: "What is 2*(4+4)?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "George Washington",
      "John Adams",
      "John Quincy Adams",
      "Thomas Jefferson",
    ],
    correct: 0,
  },
  {
    question: "What state is Philadelphia in?",
    answers: [
      "Commonwealth of Pennsylvania",
      "New Jersey",
      "New York",
      "Massachusetts",
    ],
    correct: 0,
  },
  {
    question: "What are the two major political parties in the United States?",
    answers: [
      "Democratic Party & Republican Party",
      "Green Party & Red Party",
      "Bull Party & Moose Party",
      "Hamilton Party & Burr Party",
    ],
    correct: 0,
  },
];

const Eight = () => {
  const [currentQuestions, setcurrentQuestions] = React.useState(0)
  const [score, setScore] = React.useState(0)

  const solutionChecker = (cq, index) => {
    if (QUESTIONS[cq].correct == index) {
      setScore(score + 1)
    }
    setcurrentQuestions(currentQuestions + 1)
  }

  const displayQuestion = () => {
    return (<>
      {currentQuestions < QUESTIONS.length ? (
        <React.Fragment >
          <h3 onClick={solutionChecker}>{QUESTIONS[currentQuestions].question}</h3>
          <p>score : {score}</p>
          <ul>
            {QUESTIONS[currentQuestions].answers.map((ans, index) => <li onClick={() => solutionChecker(currentQuestions, index)}>{ans}</li>)}
          </ul>
        </React.Fragment>
      ) : <p>{`You scored ${(score / QUESTIONS.length) * 100}%`}</p>}
    </>)
  }
  return (
    <>
      {displayQuestion()}
    </>
  )
}

export default Eight