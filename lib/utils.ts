import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";
import numeral from "numeral";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeAgo = (dateString: string) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true }).replace(
    "about ",
    ""
  );
};

export const formatNumber = (num: number) => {
  if (num === 0) return "0";
  const abs = Math.abs(num);
  const formatted =
    abs >= 1000 ? numeral(abs).format("0.0a") : numeral(abs).format("0,0");
  return num < 0 ? `-${formatted}` : formatted;
};
