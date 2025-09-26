import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl =    
process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.NEXT_PUBLIC_BASE_URL;

export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.NEXT_PUBLIC_API_URL!;

type ResponseData = {
  category: string;
  title: string;
  slug: string;
}[];

export const fetcher = (
  ...args: Parameters<typeof fetch>
): Promise<ResponseData> => fetch(...args).then((res) => res.json());

