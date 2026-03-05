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
    "drp-pagination",
    variant && `drp-pagination--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={containerClasses}>
      <button
        className="drp-pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`drp-pagination__page ${page === currentPage ? "drp-pagination__page--active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="drp-pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        ›
      </button>
    </div>
  );
}
