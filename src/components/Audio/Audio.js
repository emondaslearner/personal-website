import React, { useState, useEffect } from "react";
import hell from "../../assets/audio.mp3";

const Player = ({ clicked }) => {
  const [audio] = useState(new Audio(hell));
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useState(() => {
    if (clicked) {
      audio.play();
    }
  }, [clicked]);

  return (
    <div
      onClick={() =>
        playing == null ? setPlaying(true) : setPlaying(!playing)
      }
      className="fixed top-5 right-5 !z-20 flex items-center cursor-pointer"
    >
      <p className="flex items-center font-semibold text-[#977500] text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Sound
      </p>
      {playing ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 30 30"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 30 30"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      )}
    </div>
  );
};

export default Player;
