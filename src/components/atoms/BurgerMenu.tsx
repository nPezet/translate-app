export default function BurgerMenu({
  handleToggle,
}: {
  handleToggle: () => void;
}) {
  return (
    <div
      className="absolute top-2 right-2 flex flex-col justify-between w-6 aspect-square"
      onClick={handleToggle}
    >
      <span className="bg-theme-kaki w-full h-1" />
      <span className="bg-theme-kaki w-full h-1" />
      <span className="bg-theme-kaki w-full h-1" />
    </div>
  );
}
