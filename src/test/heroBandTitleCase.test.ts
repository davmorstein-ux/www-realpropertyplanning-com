import { titleCase } from "@/components/HeroBandTitle";

describe("hero band title case", () => {
  it("keeps Roman numerals and business suffixes in capitals", () => {
    expect(titleCase("Specialized Home Care II")).toBe("Specialized Home Care II");
    expect(titleCase("SUNRISE ADULT FAMILY HOME III LLC")).toBe("Sunrise Adult Family Home III LLC");
    expect(titleCase("Grace Haven IV")).toBe("Grace Haven IV");
  });
  it("still title-cases ordinary words", () => {
    expect(titleCase("what it costs to live in an adult family home")).toBe("What It Costs to Live in an Adult Family Home");
    expect(titleCase("Living in Washington")).toBe("Living in Washington");
  });
});
