import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * A deliberately small Markdown renderer for guide text kept in data files
 * (src/data/statuteGuides.json). Supports: paragraphs, **bold**, *italic*,
 * [links](/internal or https://external), "- " bullet lists, "1. " numbered
 * lists, and | pipe | tables |. Nothing else; no raw HTML is ever rendered.
 *
 * Elements get the caller's class names so pages keep their own scoped CSS
 * (index.css overrides unscoped p, li, a and table styles).
 */

interface Classes {
  p?: string;
  ul?: string;
  ol?: string;
  li?: string;
  a?: string;
  table?: string;
}

function inline(text: string, cls: Classes, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  // Order matters: links first (their text may contain bold), then bold, then italic.
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\n]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${keyBase}-${i++}`;
    if (m[1] !== undefined) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={k} to={href} className={cls.a}>{inline(m[1], cls, k)}</Link>
        ) : (
          <a key={k} href={href} className={cls.a} target="_blank" rel="noopener noreferrer">{inline(m[1], cls, k)}</a>
        ),
      );
    } else if (m[3] !== undefined) {
      out.push(<strong key={k}>{inline(m[3], cls, k)}</strong>);
    } else if (m[4] !== undefined) {
      out.push(<em key={k}>{m[4]}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (row: string) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

export default function MiniMarkdown({ md, classes = {} }: { md: string; classes?: Classes }) {
  const lines = md.replace(/\r/g, "").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let b = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const key = `b${b++}`;
    if (/^\s*-\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\s*\d+\.\s+/ : /^\s*-\s+/).test(lines[i])) {
        let item = lines[i].replace(/^\s*(?:-|\d+\.)\s+/, "");
        i++;
        // continuation lines (indented, not a new item)
        while (i < lines.length && lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && !/^\s*(?:-|\d+\.)\s+/.test(lines[i])) item += " " + lines[i++].trim();
        items.push(item);
      }
      const lis = items.map((it, j) => <li key={j} className={classes.li}>{inline(it, classes, `${key}-${j}`)}</li>);
      blocks.push(ordered ? <ol key={key} className={classes.ol}>{lis}</ol> : <ul key={key} className={classes.ul}>{lis}</ul>);
      continue;
    }
    if (line.trim().startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++]);
      const [head, , ...body] = rows;
      blocks.push(
        <div key={key} style={{ overflowX: "auto" }}>
          <table className={classes.table}>
            <thead>
              <tr>{cells(head).map((c, j) => <th key={j}>{inline(c, classes, `${key}-h${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri}>{cells(r).map((c, j) => <td key={j}>{inline(c, classes, `${key}-${ri}-${j}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^\s*(?:-|\d+\.)\s+/.test(lines[i]) && !lines[i].trim().startsWith("|")) para.push(lines[i++].trim());
    blocks.push(<p key={key} className={classes.p}>{inline(para.join(" "), classes, key)}</p>);
  }
  return <Fragment>{blocks}</Fragment>;
}

