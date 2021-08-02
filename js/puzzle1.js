const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "What were used as counters, a sort of primitive version of the beads on an abacus?",
    answers: {
      a: "Coins",
      b: "Sticks",
      c: "Leaves"
    },
    correctAnswer: "b"
  },
  {
    question: "The floor was made of dirt. Only the wealthy had something other than dirt, ergo what saying?",
    answers: {
      a: "Dirt poor",
      b: "Rich",
      c: "Pretty Cheap"
    },
    correctAnswer: "a"
  },
  {
    question: "Many surnames (last names) were created as descriptions of the person’s what?",
    answers: {
      a: "Job",
      b: "Location",
      c: "Parents",
      d: "All of the above."
    },
    correctAnswer: "d"
  }
];