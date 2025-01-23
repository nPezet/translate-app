export default function SideNav({ displayed }: { displayed: boolean }) {
  return (
    <nav
      className={`w-[80svw] h-[100svh] bg-theme-kaki absolute top-0 transition-all left-[${
        displayed ? "20%" : "full"
      }]`}
    ></nav>
  );
}
