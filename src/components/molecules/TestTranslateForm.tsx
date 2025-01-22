"use client";
import { useState } from "react";
import TestTranslateProgressBar from "../atoms/TestTranslateProgressBar";
import { WordData } from "@/utils/types";
import TestActionsButton from "../atoms/TestTranslateActionsButton";

export default function TestTranslateForm({ words }: { words: WordData[] }) {
  const [wordData, setWordData] = useState(words);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [proposition, setProposition] = useState("");
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const handleSubmittedAnswer = () => setDisplayAnswer(true);

  const handleValidation = (value: boolean) => {
    setWordData((p) => {
      p[currentWordIndex].correct = value;
      return p;
    });
    setProposition(() => "");
    setDisplayAnswer(() => false);
    setTimeout(
      () =>
        currentWordIndex + 1 < wordData.length &&
        setCurrentWordIndex((p) => p + 1),
      500
    );
  };
  return (
    <>
      <TestTranslateProgressBar wordData={wordData} />
      <div
        // style={{
        //   margin: "20px 0",
        //   fontSize: "1.5rem",
        //   borderRadius: "5px",
        //   borderColor: "blue",
        //   borderWidth: "2px",
        //   padding: "40px 0px 40px 0px",
        // }}
        className="py-10 rounded my-5 text-xl bg-theme-turquoise text-theme-dark"
      >
        {/* TODO Carousel
          {wordData.map((wd, idx) => {
            return (
            );
          })}
        */}
        <p>
          <strong>{words[currentWordIndex].english}</strong>
        </p>
      </div>
      <input
        style={{
          margin: "20px 0",
          fontSize: "1.5rem",
          borderRadius: "5px",
          borderColor: "green",
          borderWidth: "2px",
          padding: "10px 10px 10px 10px",
          textAlign: "center",
        }}
        type="text"
        onChange={(e) => setProposition(e.currentTarget.value)}
        value={proposition}
      />
      <div
        style={{
          margin: "20px 0",
          fontSize: "1.5rem",
          padding: "40px 0px 40px 0px",
          transition: "all 200ms",
        }}
        className={`${displayAnswer ? "!opacity-100" : ""} opacity-0`}
      >
        <p>
          <strong>{words[currentWordIndex].french}</strong>
        </p>
      </div>
      <TestActionsButton
        displayAnswer={displayAnswer}
        handleSubmittedAnswer={handleSubmittedAnswer}
        handleValidation={handleValidation}
      />
    </>
  );
}
