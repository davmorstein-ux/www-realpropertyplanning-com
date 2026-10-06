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
  it("drops sort-first prefixes but keeps numbers that are part of the name", () => {
    expect(readableAfhName("1 # Angel's Nest Adult Family Home LLC")).toBe("Angel's Nest Adult Family Home LLC");
    expect(readableAfhName("! Hebron AFH")).toBe("Hebron AFH");
    expect(readableAfhName("00001 Suzanne's South Hill AFH")).toBe("Suzanne's South Hill AFH");
    expect(readableAfhName("1*america's Best Adult Family Home LLC")).toBe("America's Best Adult Family Home LLC");
    expect(readableAfhName("1st* Hope Adult Family Home LLC")).toBe("1st Hope Adult Family Home LLC");
    expect(readableAfhName("1st EDMONDS BOWL ADULT FAMILY HOME LLC")).toBe("1st Edmonds Bowl Adult Family Home LLC");
    expect(readableAfhName("1st Choice Adult Family Home LLC")).toBe("1st Choice Adult Family Home LLC");
    expect(readableAfhName("100 Acre AFH")).toBe("100 Acre AFH");
    expect(readableAfhName("Better Place AFH #2 LLC")).toBe("Better Place AFH #2 LLC");
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
