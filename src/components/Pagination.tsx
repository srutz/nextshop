"use client";

import { useTransitionRouter } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export function Pagination({
  page,
  totalPages,
  className,
}: Readonly<{
  page: number;
  totalPages: number;
  className?: string;
}>) {
  const router = useTransitionRouter();
  const onPageChange = (newPage: number) => {
    router.push(`/product?page=${newPage}`);
  };
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        className="text-sm"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </Button>
      <span className="text-sm">
        Page {page} of {totalPages}
      </span>
      <Button
        className="text-sm"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
