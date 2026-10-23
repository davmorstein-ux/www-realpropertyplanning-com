// Shared shapes for the simplified guided paths (Oct 2026): Helping an Aging
// Parent, Handling an Estate and Plan Ahead. Each path keeps its own wording
// and images in its own file (estate-simple.ts, plan-ahead-simple.ts).

export interface SimpleStep {
  title: string;
  text: string;
  /** Optional: a step without an image renders text only until it arrives. */
  image?: string;
}

export interface SimpleTopic {
  title: string;
  short: string;
  steps: SimpleStep[];
}

export interface SimpleChoice {
  to: string;
  label: string;
  image: string;
}

export interface NotSureBar {
  to: string;
  label: string;
  sub: string;
}
