import { useState } from "react";
import regularEgg from "../assets/egg.jpg";
import wrinklyEgg from "../assets/Egg-wrinkly.png";

export default function Home() {
  const [egg, setEgg] = useState(null);

  function handleRandomizeEgg() {
    const randomEgg = Math.floor(Math.random() * 10);
    if (randomEgg % 7 === 0) {
      setEgg(wrinklyEgg);
    } else {
      setEgg(regularEgg);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-200 border-2 p-1 rounded-lg mb-2 hover:bg-blue-400"
        onClick={handleRandomizeEgg}
      >
        Losuj
      </button>
      {egg && <img src={egg} className="w-2/10" alt="React logo" />}
    </div>
  );
}
