import "./burger.css";

export default function BurgerMenu({
  handleToggle,
  toggled,
}: {
  handleToggle: () => void;
  toggled: boolean;
}) {
  return (
    <div
      className={`absolute top-2 right-2 flex flex-col justify-between w-6 aspect-square z-50 burger ${
        toggled ? "toggled-burger" : ""
      }`}
      onClick={handleToggle}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
