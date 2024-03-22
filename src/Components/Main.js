import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Round_2_Data from "./Round_2_Data";
import Round_3_Data from "./Round_3_Data";

function Main() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  function checkCode(code) {
    let team = Round_2_Data.find((team) => team.code === code);
    team = team + Round_3_Data.find((team) => team.code === code);
    if (team) {
      return true;
    }
    return false;
  }
  function handleStart() {
    if (code === "") return;
    if (!checkCode(code)) {
      return;
    }
    if (code.includes("@")) {
      localStorage.setItem("code", code);
      navigate("/Round_2");
    } else if (code.includes("#")) {
      localStorage.setItem("code", code);
      navigate("/Round_3");
    } else {
      console.log("Invalid code");
    }
  }
  return (
    <div
      class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen flex items-center justify-center z-[1]"
      style={{
        backgroundImage: `url("https://logo-blitz.vercel.app/Backgrounds/main.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="absolute h-full w-full bg-black opacity-60 "></div>
      <div className="z-10">
        <h1 class="text-4xl font-bold text-white">Welcome to our game</h1>

        <form class="flex space-x-1 mt-5" onSubmit={handleStart}>
          <input
            type="text"
            class="p-2 rounded-md shadow-md bg-white w-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            placeholder="Enter your code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
