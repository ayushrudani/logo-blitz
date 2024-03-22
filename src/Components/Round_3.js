import React, { useEffect, useState } from "react";
import Round_3_Data from "./Round_3_Data";
import { useNavigate } from "react-router-dom";

const Round_3 = () => {
  const code = localStorage.getItem("code");
  const questions = useState(fillData());
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();
  // fill the data accroding to code
  function fillData() {
    let data = Round_3_Data.find((team) => team.code === code);
    return data.quizData;
  }
  // shuffle the options
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // set score in session storage
  useEffect(() => {
    localStorage.setItem("score", 0);
  }, []);
  // next question
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      let score = localStorage.getItem("score");
      score = parseInt(score) + 5;
      localStorage.setItem("score", score);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // if last question then redirect to score page

    if (currentQuestion + 1 === questions.length) {
      navigate("/over");
    }
  };

  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-[6rem]">
      <h1 class="text-3xl font-semibold w-full flex items-center justify-center px-3 py-10">
        Question {currentQuestion + 1} of {questions.length}
      </h1>
      <div class="-m-1 flex flex-wrap md:-m-2 items-center justify-center">
        <div class="flex w-1/2 flex-wrap justify-center">
          <div class="w-1/3 p-1 md:p-2 flex justify-center items-center">
            <img
              src={questions[0][currentQuestion].image1}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <h1 class="text-3xl w-1/3 font-semibold flex items-center justify-center">
            +
          </h1>
          <div class="w-1/3 p-1 md:p-2 flex justify-center items-center">
            <img
              src={questions[0][currentQuestion].image2}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>
      <p class="text-2xl font-semibold w-full flex items-center justify-center px-3 py-10">
        Select the correct option
      </p>
      <div class="-m-1 flex flex-wrap md:-m-2 items-center justify-center">
        {shuffleArray(questions[0][currentQuestion].options).map(
          (option, index) => (
            <div
              class="w-1/8 p-1 md:p-2 flex justify-center items-center"
              key={index}
            >
              <a
                onClick={() => optionClicked(option.isCorrect)}
                key={option.id}
              >
                <img
                  src={option.optionImage}
                  alt=""
                  style={{
                    cursor: "pointer",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Round_3;
