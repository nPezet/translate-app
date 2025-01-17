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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        height: "54px",
        overflow: "hidden",
        rowGap: "10px",
      }}
    >
      <button
        disabled={displayAnswer}
        onClick={handleSubmittedAnswer}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: displayAnswer ? "#8F9779" : "#568203",
          color: displayAnswer ? "black" : "#fff",
          border: "none",
          borderRadius: "5px",
          transition: "all 200ms",
          fontWeight: "bold",
        }}
        className={`${displayAnswer ? "!-translate-y-full" : ""} translate-y-0`}
      >
        Submit
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "10px",
          transition: "all 200ms",
        }}
        className={`${displayAnswer ? "!-translate-y-full" : ""} translate-y-0`}
      >
        <button
          onClick={() => handleValidation(true)}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#568203",
            fontWeight: "bold",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            transitionDuration: "200",
            transitionProperty: "background-color color",
            flex: "1",
          }}
        >
          Correct
        </button>
        <button
          onClick={() => handleValidation(false)}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#7C0A02",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            transitionDuration: "200",
            transitionProperty: "background-color color",
            flex: "1",
          }}
        >
          Wrong
        </button>
      </div>
    </div>
  );
}
