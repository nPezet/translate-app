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
    <div className="p-1 flex justify-around bg-theme-kaki rounded">
      {wordData.map((wd, idx) => (
        <span
          className={`rounded-full aspect-square w-2 aspect-square w-2 rounded-full ${
            wd.correct === undefined
              ? "bg-black opacity-50"
              : wd.correct
              ? "bg-theme-turquoise"
              : "bg-theme-red"
          }`}
          key={`count-dot-${idx}`}
        ></span>
      ))}
    </div>
  );
}
