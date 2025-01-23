import Link from "next/link";

const links = [
  {
    label: "✨ New word",
    route: "/app/new_word",
  },
  {
    label: "📚 Vocabulary test",
    route: "/app/test",
  },
];

export default function SideNav({ displayed }: { displayed: boolean }) {
  return (
    <div
      className={`absolute bg-black top-0 left-0 h-screen w-screen pointer-events-none ${
        displayed ? "bg-opacity-65" : "bg-opacity-0"
      } overflow-hidden z-40`}
    >
      <nav
        className={`w-[75svw] h-[100svh] bg-theme-kaki absolute top-0 transition-all flex flex-col justify-center gap-y-4 border-l-2 border-l-theme-yellow rounded-l-lg ${
          displayed ? "left-1/4" : "left-full"
        } pointer-events-auto`}
      >
        {links.map((l, idx) => (
          <Link
            key={`nav-link-${idx}`}
            href={l.route}
            className="text-theme-dark text-center bg-opacity-5 bg-theme-dark p-2 mx-2 rounded"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
