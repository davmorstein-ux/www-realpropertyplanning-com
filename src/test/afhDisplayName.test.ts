import { readFileSync, readdirSync } from "fs";
import { readableAfhName } from "../../scripts/lib/afh-display-name.mjs";

describe("AFH display names", () => {
  it("puts all-caps DSHS names into readable title case", () => {
    expect(readableAfhName("CARING GROVE AFH LLC")).toBe("Caring Grove AFH LLC");
    expect(readableAfhName("ROCK OF AGES ADULT FAMILY HOME III LLC")).toBe("Rock of Ages Adult Family Home III LLC");
    expect(readableAfhName("MARY'S PLACE")).toBe("Mary's Place");
    expect(readableAfhName("JM ADULT FAMILY HOME, INC.")).toBe("JM Adult Family Home, Inc.");
    expect(readableAfhName("MCKINLEY COTTAGE")).toBe("McKinley Cottage");
  });
  it("leaves names the licensee styled in mixed case alone", () => {
    expect(readableAfhName("Specialized Home Care II")).toBe("Specialized Home Care II");
    expect(readableAfhName("iCare Home")).toBe("iCare Home");
  });
  it("no stored directory name is still all capitals", () => {
    const dir = "src/data/afh/cities";
    const shouting: string[] = [];
    for (const f of readdirSync(dir)) {
      const data = JSON.parse(readFileSync(`${dir}/${f}`, "utf8"));
      const homes = Array.isArray(data) ? data : data.homes ?? Object.values(data).find(Array.isArray);
      for (const h of homes) if (/^[^a-z]*[A-Z]{4}[^a-z]*$/.test(h.displayName)) shouting.push(h.displayName);
    }
    expect(shouting).toEqual([]);
  });
});
