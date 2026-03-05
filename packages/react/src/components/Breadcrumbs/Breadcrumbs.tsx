export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`drp-breadcrumbs ${className}`}>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="drp-breadcrumbs__sep">/</span>}
          {item.href ? (
            <a className="drp-breadcrumbs__link" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span className="drp-breadcrumbs__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
