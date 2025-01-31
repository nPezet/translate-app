"use client";
import CircleLoader from "@/components/atoms/CircleLoader";
import { useState } from "react";
import "./page.css";
import CheckIcon from "@/components/atoms/CheckIcon";

export default function NewWord() {
  const [englishWord, setEnglishWord] = useState("");
  const [frenchWord, setFrenchWord] = useState("");
  const [fetchedState, setFetchedState] = useState<
    "none" | "loading" | "error-input" | "error-server" | "success"
  >();

  const handleSubmit = async () => {
    setFetchedState("loading");
    try {
      const res = await fetch("/api/new_word", {
        method: "POST",
        body: JSON.stringify({
          englishWord,
          frenchWord,
        }),
      });
      console.log("res", res);
      setFetchedState(res.status === 400 ? "error-input" : "success");
    } catch (e) {
      console.error(e);
      setFetchedState("error-server");
    }
  };

  const handleResetForm = () => {
    console.log("toto");
    setEnglishWord(() => "");
    setFrenchWord(() => "");
    setFetchedState(() => "none");
  };

  return (
    <div className="p-5 flex flex-col justify-center text-center h-[100svh]">
      <div
        className={`flex flex-col grow gap-y-4 justify-center words-fields ${
          fetchedState === "success" ? "animate-shrink" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-y-2 opacity-100 transition-opacity ${
            fetchedState === "success" ? "animate-fade" : ""
          }`}
        >
          <label className="text-theme-yellow">English</label>
          <input
            className="rounded bg-theme-kaki text-theme-dark text-center focus-visible:border-none focus-visible:outline-none"
            value={englishWord}
            onChange={(e) => setEnglishWord(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div
          className={`flex flex-col gap-y-2 opacity-100 transition-opacity ${
            fetchedState === "success" ? "animate-fade" : ""
          }`}
        >
          <label className="text-theme-yellow">French</label>
          <input
            className="rounded bg-theme-kaki text-theme-dark text-center focus-visible:border-none focus-visible:outline-none"
            value={frenchWord}
            onChange={(e) => setFrenchWord(e.currentTarget.value)}
            type="text"
          />
        </div>
      </div>
      {fetchedState?.startsWith("error-") && (
        <p className="text-theme-red my-2">
          {fetchedState === "error-server"
            ? "[Server] - Error while adding your new word to vocabulary"
            : "[Inputs] - Error while adding your new word to vocabulary"}
        </p>
      )}
      <button
        className={`rounded bg-theme-yellow text-theme-dark p-2 font-bold h-10 submit-button ${
          fetchedState === "success" ? "mx-auto validated-submit" : ""
        }`}
        onClick={handleSubmit}
      >
        {fetchedState === "loading" ? (
          <CircleLoader />
        ) : fetchedState === "success" ? (
          <CheckIcon handleNewWord={handleResetForm} />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}
