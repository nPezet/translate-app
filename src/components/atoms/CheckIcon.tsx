export default function CheckIcon({
  handleNewWord,
}: {
  handleNewWord: () => void;
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 60 L45 80 L70 30"
          stroke="black"
          stroke-width="5px"
          fill="transparent"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dashoffset="200"
          stroke-dasharray="200"
        />
      </svg>
      <div className="validation-label absolute left-1/2 -translate-x-1/2 text-theme-yellow text-nowrap top-full pt-3 opacity-0">
        <p>Added to your vocabulary database</p>
        <button
          className="bg-theme-yellow text-theme-dark mt-2 p-1 rounded"
          onClick={(e) => {
            e.stopPropagation();
            handleNewWord();
          }}
        >
          Add a new one
        </button>
      </div>
    </div>
  );
}
