// React's bundled types only accept the camelCase `fetchPriority`, which React 18
// itself warns is unrecognised and drops. The browser reads the lowercase
// attribute, so the prop is written lowercase and typed here.
import type * as React from "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    fetchpriority?: "high" | "low" | "auto" | undefined;
  }
}
