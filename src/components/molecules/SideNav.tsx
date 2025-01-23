import Link from "next/link";

export default function SideNav({ displayed }: { displayed: boolean }) {
  return (
    <nav
      className={`w-[80svw] h-[100svh] bg-theme-kaki absolute top-0 transition-all ${
        displayed ? "left-1/4" : "left-full"
      }`}
    >
      {/* <Link /> */}
    </nav>
  );
}
