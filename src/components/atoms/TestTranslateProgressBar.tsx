import { WordData } from "@/utils/types";

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
