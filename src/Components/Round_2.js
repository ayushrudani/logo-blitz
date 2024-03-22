import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Round_2_Data from "./Round_2_Data";

function Round_2() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const code = localStorage.getItem("code");
  const [listOfImage, setlistOfImages] = useState(findTeam());

  // every 2 seconds the state of isVisible will change after 12 seconds it's stop

  function findTeam() {
    let team = Round_2_Data.find((team) => team.code === code);
    return team.images;
  }
  let counter = 0;
  useEffect(() => {
    // setlistOfImages(findTeam());
    // set the interval of 2 seconds
    setInterval(() => {}, 2000);
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
      shuffleImages();
      counter++;
      if (counter == 10) {
        clearInterval(interval);
        setIsOver(true);
        navigate("/Round_2_Form");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // shuffle the images

  function shuffleImages() {
    let shuffledImages = Object.values(listOfImage).sort(
      () => Math.random() - 0.5
    );

    setlistOfImages(shuffledImages);
  }

  return isOver || code == null ? (
    // center the text
    <div class="flex items-center justify-center h-screen">
      <h1 class="text-3xl font-semibold">Round 2 is over</h1>
    </div>
  ) : (
    <div>
      <div class="container mx-auto px-5 py-2 lg:px-32 flex justify-center items-center">
        <div class="-m-1 flex flex-wrap md:-m-2 items-center">
          {Object.values(listOfImage).map((image, index) => (
            <div class="flex w-1/5 flex-wrap ">
              <div
                class="w-full p-1 md:p-2 flex justify-center items-center"
                key={index}
                style={{ visibility: isVisible ? "visible" : "hidden" }}
              >
                {/* {console.log(image)} */}
                <img
                  src={image}
                  alt={image}
                  class="block rounded-lg object-cover object-center  w-[100px]"
                />
              </div>
            </div>
          ))}

          {/* <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Round_2;
