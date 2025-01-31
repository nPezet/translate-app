interface TestTranslateActionsButtonProps {
  displayAnswer: boolean;
  handleSubmittedAnswer: () => void;
  handleValidation: (value: boolean) => void;
}

export default function TestActionsButton({
  displayAnswer,
  handleSubmittedAnswer,
  handleValidation,
}: TestTranslateActionsButtonProps) {
  return (
    <div className="h-14 gap-y-3 overflow-hidden mt-auto flex flex-col">
      <button
        disabled={displayAnswer}
        onClick={handleSubmittedAnswer}
        className={`${
          displayAnswer ? "!-translate-y-full" : ""
        } translate-y-0 bg-theme-yellow text-theme-dark rounded py-2 px-4 cursor-pointer text-lg transition-colors font-bold rounded`}
      >
        Submit
      </button>
      <div
        className={`${
          displayAnswer ? "!-translate-y-full" : ""
        } translate-y-0 flex justify-between gap-x-3 transition-transform`}
      >
        <button
          onClick={() => handleValidation(true)}
          className="py-2 px-4 text-lg bg-theme-turquoise text-theme-kaki rounded flex-1 font-bold"
        >
          Correct
        </button>
        <button
          onClick={() => handleValidation(false)}
          className="py-2 px-4 text-lg bg-theme-red text-theme-kaki rounded flex-1 font-bold"
        >
          Wrong
        </button>
      </div>
    </div>
  );
}
