"use client";

export function Rating({ rating }: { rating: number }) {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <title>Full star</title>
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 20.202 4.665 24l1.335-8.73L0 9.423l8.332-1.268L12 .587z" />
          </svg>
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-gray-300"
          >
            <title>Empty star</title>
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 20.202 4.665 24l1.335-8.73L0 9.423l8.332-1.268L12 .587z" />
          </svg>
        ))}
    </div>
  );
}
