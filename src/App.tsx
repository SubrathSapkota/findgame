import React, { useEffect, useState } from 'react'

import Image1 from "./images/subrat.png";
import Image2 from "./images/prabin.png";
import Image3 from "./images/saurab.png";
import Image4 from "./images/hemvai.png";
import Image5 from "./images/ashab.png";
import Image6 from "./images/bibasvai.png";
import Image7 from "./images/uzal.png";
import Image8 from "./images/lokey.png";
import Image9 from "./images/srkbhai.png";
import Image10 from "./images/tunda.png";


const App = () => {

  const letters = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ];

  const [suffelLetter, setSuffelLetter] = useState<string[]>([]);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    const suffel = letters.sort(() => Math.random() - 0.5);
    setSuffelLetter(suffel);
  }, []);

  const handleClick = (index: number) => {
    setClickedIndexes((PrevIndexes) => [...PrevIndexes, index]);

    setHide(true);

    if (clickedIndexes.length === 1) {
      const firstIndex = clickedIndexes[0];
      const secondIndex = index;

      if (suffelLetter[firstIndex] === suffelLetter[secondIndex]) {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
        setScore((prevScore) => prevScore + 1);
        setMessage(" Miloooooooooooooooo ");
      } else {
        setMessage("THUKKA MILEENA");
      }
    } else {
      return;
    }
    setTimeout(() => {
      setClickedIndexes([]);
      setMessage("");
    }, 500);
  };

  const isMatched = (index: number) => matchedIndexes.includes(index);


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold">COW-MAU Game</h1>
      <p className="text-lg font-bold">Score: {score}</p>
      <div className="h-10 w-auto mb-10">
        <p
          className={`h-20 w-auto text-2xl font-bold ${
            message === " Miloooooooooooooooo "
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {message}
        </p>
      </div>
      <div className="h-[500px] w-auto bg-red-400 py-5 px-5 flex flex-col justify-around rounded-2xl">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {suffelLetter.map((letter, index) => (
            <button
              className={`bg-slate-500 w-20 h-20 hover:bg-slate-600 rounded-full text-white text-2xl border-2  `}
              key={index}
              onClick={() => handleClick(index)}
              disabled={isMatched(index) || clickedIndexes.includes(index)}
            >
              {matchedIndexes.includes(index) ? (
                <img className="rounded-full " src={letter} alt="" />
              ) : hide && clickedIndexes.includes(index) ? (
                <img className="rounded-full" src={letter} alt="" />
              ) : (
                ""
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
