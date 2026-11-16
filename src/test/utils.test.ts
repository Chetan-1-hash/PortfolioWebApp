import { describe, it, expect } from "vitest";
import { calculateExperienceDuration, formatMonthYear } from "@/lib/utils";

describe("experience duration utilities", () => {
  it("calculates duration accurately across years and months", () => {
    const result = calculateExperienceDuration("2025-02-06", "2026-11-16");
    expect(result.years).toBe(1);
    expect(result.months).toBe(9);
    expect(result.totalMonths).toBe(21);
    expect(result.label).toBe("1 yr 9 mos");
  });

  it("handles month boundary before start day", () => {
    const result = calculateExperienceDuration("2025-02-06", "2025-03-05");
    expect(result.totalMonths).toBe(0);
    expect(result.label).toBe("< 1 mo");
  });

  it("handles exact year multiples", () => {
    const result = calculateExperienceDuration("2025-02-06", "2027-02-06");
    expect(result.years).toBe(2);
    expect(result.months).toBe(0);
    expect(result.label).toBe("2 yrs");
  });

  it("formats YYYY-MM-DD into MMM YYYY", () => {
    expect(formatMonthYear("2025-02-06")).toBe("Feb 2025");
  });
});
