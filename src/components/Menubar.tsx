"use client";

import { Link } from "next-view-transitions";
import { echo } from "@/lib/serverutils";

export function Menubar() {
  return (
    <div className="w-full shrink-0 h-10 bg-gray-800 text-white flex gap-4 items-center px-4">
      THE SHOP
      <Link href={"/"}>Home</Link>
      <Link href={"/product"}>Products</Link>
      <div className="grow"></div>
      <button type="button" onClick={() => echo("run code")}>
        Run code
      </button>
    </div>
  );
}
