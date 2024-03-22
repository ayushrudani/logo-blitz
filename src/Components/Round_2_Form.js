import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./Counter";
import Round_2_Data from "./Round_2_Data";

function Round_2_Form() {
  const [data, setData] = useState([]);
  const code = localStorage.getItem("code");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // trim the data remove the empty spaces and convert the data into lowercase
    let trimmedData = data.map((item) => item.trim().toLowerCase());
    // remove the spaces between the words
    trimmedData = trimmedData.map((item) => item.replace(/\s/g, ""));
    // remove a "" from an array
    trimmedData = trimmedData.filter((item) => item !== "");
    // check the answer is correct or not with team2 array
    let team = Round_2_Data.find((team) => team.code === code);
    let answerArray = Object.values(team.images).map((item) =>
      item.split("/")[3].split(".")[0].replace(/\s/g, "").toLowerCase()
    );
    let score = 0;
    // if answer is correct increment the score by 4 if not decrement the score by 1
    trimmedData.forEach((item) => {
      if (answerArray.includes(item)) {
        score += 4;
      } else {
        score -= 1;
      }
    });
    localStorage.setItem("score", score);
    navigate("/Score");
  }
  useEffect(() => {
    // after 10 minutes the page will redirect to the score page
    setTimeout(() => {
      handleSubmit({ preventDefault: () => {} });
    }, 600000);
  }, []);

  return (
    // right cornoer of the screen display the 10 miniutes timer
    <>
      <div class="absolute top-10 right-0 m-5 p-2 bg-white bg-opacity-50 rounded-lg z-1000">
        <CountdownTimer />
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-32 flex justify-center items-center ">
        <div class="flex items-center justify-center h-screen">
          <div class="flex flex-col space-y-4">
            <h1 class="text-3xl font-semibold">Round 2 Form</h1>
            <form
              class="flex flex-col space-y-4"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div class="grid grid-cols-5 gap-4">
                {Array.from({ length: 25 }).map((_, index) => (
                  <input
                    type="text"
                    class="p-2 rounded-md shadow-md bg-white w-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder={`Answer ${index + 1}`}
                    onChange={(e) => {
                      let temp = [...data];
                      temp[index] = e.target.value;
                      setData(temp);
                    }}
                  />
                ))}
              </div>
              <button
                type="submit"
                class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Round_2_Form;
