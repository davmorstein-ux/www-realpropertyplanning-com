// React 18 does not recognise the fetchPriority prop: the camelCase form
// (`fetchPriority`) is dropped with a console warning, and the lowercase form
// fails TS's bundled img typings. Setting the attribute directly on the element
// avoids both, and the attribute is what the browser reads.
export function setFetchPriority(value: "high" | "low" | "auto") {
  return (el: HTMLImageElement | null) => {
    if (el) el.setAttribute("fetchpriority", value);
  };
}
