import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section by ID without mutating window.location.hash,
 * keeping React Router's HashRouter intact.
 */
export function scrollToSection(sectionId: string) {
  const cleanId = sectionId.replace(/^#/, "");
  if (cleanId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(cleanId);
  if (!element) return;

  const navOffset = 88;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: Math.max(0, elementTop - navOffset),
    behavior: "smooth",
  });
}

/**
 * Dynamically calculates duration (years & months) between a start date (YYYY-MM-DD)
 * and an optional end date (defaults to today's date).
 */
export function calculateExperienceDuration(
  startDateStr: string,
  endDateStr?: string
): { years: number; months: number; totalMonths: number; label: string } {
  const [sy, sm, sd] = startDateStr.split("-").map(Number);
  const start = new Date(sy, (sm || 1) - 1, sd || 1);
  const end = endDateStr
    ? (() => {
        const [ey, em, ed] = endDateStr.split("-").map(Number);
        return new Date(ey, (em || 1) - 1, ed || 1);
      })()
    : new Date();

  if (end < start) {
    return { years: 0, months: 0, totalMonths: 0, label: "< 1 mo" };
  }

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    totalMonths = Math.max(0, totalMonths - 1);
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);

  return {
    years,
    months,
    totalMonths,
    label: parts.length > 0 ? parts.join(" ") : "< 1 mo",
  };
}

/**
 * Formats a YYYY-MM-DD date string into "MMM YYYY" (e.g., "Feb 2025").
 */
export function formatMonthYear(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
