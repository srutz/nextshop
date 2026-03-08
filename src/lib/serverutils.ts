
"use server";

export async function echo<T>(arg: T) {
  const hasWindow = typeof window !== "undefined"
  console.log("echo: ", { client: hasWindow }, arg)
}
