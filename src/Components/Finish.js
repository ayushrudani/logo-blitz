import React from "react";

function Finish() {
  return (
    <div
      class="flex items
            -center justify-center h-screen items-center"
    >
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-5xl font-semibold text-center">
                Thank you for playing......!
              </h1>
            </div>
            <div class="divide-y pt-16 divide-gray-200">
              <h1 class="text-2xl text-center text-red-600 font-semibold">
                Note : Do not close window or refresh the page. Your score will
                be lost.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
