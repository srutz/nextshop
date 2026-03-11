"use server";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";

// Server Actions
export async function multiply(a: number, b: number) {
  console.log(">> multiply called with: ", a, b);
  return a * b;
}

export async function getFileSync(path: string) {
  const data = readFileSync(path, { encoding: "utf-8" });
  return data;
}

export async function getFileAsync(path: string) {
  const p = readFile(path, {
    encoding: "utf-8",
  });
  return p;
}

export async function getQuote(id: number) {
  console.log("loading quote on server", id);
  const res = await fetch(`https://dummyjson.com/quotes/${id}`);
  const data = (await res.json()) as {
    id: number;
    quote: string;
    author: string;
  };
  return data;
}
