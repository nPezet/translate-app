import Link from "next/link";

const links = [
  {
    label: "✨ New word",
    route: "/app/new_word",
  },
  {
    label: "📚 Vocabulary test",
    route: "/app/test"
  }
];

export default function SideNav({ displayed }: { displayed: boolean }) {
  return (
    <nav
      className={`w-[80svw] h-[100svh] bg-theme-kaki absolute top-0 transition-all flex flex-col justify-center gap-y-4 ${
        displayed ? "left-1/4" : "left-full"
      }`}
    >
      {links.map((l, idx) => (
        <Link
          key={`nav-link-${idx}`}
          href={l.route}
          className="text-theme-dark text-center"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
