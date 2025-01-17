import { WordData } from "@/utils/types";

const correctColor = "#568203";
const undoneColor = "#8F9779";
const wrongColor = "#7C0A02";

export default function TestTranslateProgressBar({
  wordData,
}: {
  wordData: WordData[];
}) {
  return (
    <div
      style={{
        background: "beige",
        display: "flex",
        justifyContent: "space-around",
        padding: "5px",
      }}
    >
      {wordData.map((wd, idx) => (
        <span
          key={`count-dot-${idx}`}
          style={{
            borderRadius: "50%",
            aspectRatio: "1",
            width: "10px",
            backgroundColor:
              wd.correct === undefined
                ? undoneColor
                : wd.correct
                ? correctColor
                : wrongColor,
          }}
        ></span>
      ))}
    </div>
  );
}
