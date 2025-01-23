"use client";
import { useState } from "react";

export default function NewWord() {
  const [englishWord, setEnglishWord] = useState("");
  const [frenchWord, setFrenchWord] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/new_word", {
      method: "POST",
      body: JSON.stringify({
        englishWord,
        frenchWord,
      }),
    });
    console.log(res);
  };

  return (
    <div className="p-5 flex flex-col justify-center text-center h-[100svh]">
      <div className="flex flex-col grow gap-y-4 justify-center">
        <div className="flex flex-col gap-y-2">
          <label className="text-theme-yellow">English</label>
          <input
            className="rounded bg-theme-kaki text-theme-dark text-center focus-visible:border-none focus-visible:outline-none"
            value={englishWord}
            onChange={(e) => setEnglishWord(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-theme-yellow">French</label>
          <input
            className="rounded bg-theme-kaki text-theme-dark text-center focus-visible:border-none focus-visible:outline-none"
            value={frenchWord}
            onChange={(e) => setFrenchWord(e.currentTarget.value)}
            type="text"
          />
        </div>
      </div>
      <button
        className="mt-auto rounded bg-theme-yellow text-theme-dark p-2 font-bold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
