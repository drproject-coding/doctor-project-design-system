type PaginationVariant = "dark" | "transparent";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: PaginationVariant;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant,
  className = "",
}: PaginationProps) {
  const containerClasses = [
    "bru-pagination",
    variant && `bru-pagination--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={containerClasses}>
      <button
        className="bru-pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`bru-pagination__page ${page === currentPage ? "bru-pagination__page--active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="bru-pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        ›
      </button>
    </div>
  );
}
