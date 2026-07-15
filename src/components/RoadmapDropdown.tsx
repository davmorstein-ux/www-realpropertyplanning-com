import { useState } from "react";
import { Link } from "react-router-dom";

interface Topic {
  title: string;
  href: string;
  description?: string;
}

interface RoadmapDropdownProps {
  topics: Topic[];
  accentColor?: string;
  itemLabel?: string;
}

const RoadmapDropdown = ({ topics, accentColor = "#721d24", itemLabel = "topics" }: RoadmapDropdownProps) => {
  const [open, setOpen] = useState(false);
  const isAnchor = (href: string) => href.startsWith("#");

  return (
    <div className="max-w-3xl mx-auto mb-10 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-lg border-2 bg-white text-left font-serif text-lg text-navy"
        style={{ borderColor: accentColor }}
        aria-expanded={open}
      >
        <span>Jump to {itemLabel}</span>
        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <ul className="mt-2 rounded-lg border bg-white overflow-hidden">
          {topics.map((t) => (
            <li key={t.title} className="border-b last:border-b-0">
              {isAnchor(t.href) ? (
                <a href={t.href} onClick={() => setOpen(false)} className="block px-5 py-3 text-foreground hover:bg-cream">
                  {t.title}
                </a>
              ) : (
                <Link to={t.href} onClick={() => setOpen(false)} className="block px-5 py-3 text-foreground hover:bg-cream">
                  {t.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoadmapDropdown;
