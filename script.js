const quizData = [
    {
      question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
      a: "1st",
      b: "2nd",
      c: "3rd",
      d: "5th",
      correct: "c",
    },
    {
      question: "How many month have 28 days ?",
      a: "1",
      b: "2",
      c: "it`s depend upon leap year",
      d: "12",
      correct: "d",
    },
    {
      question: "divide 30 by half & add 10?",
      a: "70",
      b: "50",
      c: "40.5",
      d: "itna kya soch raha haa , daba de mereko",
      correct: "a",
    },
    {
      question: "A farmer has 17 goats . All of them but 8 die . How many goats are alive ?",
      a: "6",
      b: "5",
      c: "9",
      d: "8",
      correct: "d",
    },
    {
      question: "who wrote the harry potter books ?",
      a: "j.k.rowling",
      b: "thomas mankish",
      c: "robert hust",
      d: "harry nich",
        correct: "a",
      },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });