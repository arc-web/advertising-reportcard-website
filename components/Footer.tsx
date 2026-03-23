export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm font-semibold text-zinc-400">Advertising Report Card</span>
        <nav className="flex items-center gap-8">
          {["Services", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
        <span className="text-xs text-zinc-600">
          2025 Advertising Report Card
        </span>
      </div>
    </footer>
  );
}
