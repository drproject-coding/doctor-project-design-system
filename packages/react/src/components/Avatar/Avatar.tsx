type AvatarSize = "sm" | "lg";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  initials?: string;
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  size,
  initials,
  className = "",
}: AvatarProps) {
  const classes = ["drp-avatar", size && `drp-avatar--${size}`, className]
    .filter(Boolean)
    .join(" ");

  if (src) {
    return <img className={classes} src={src} alt={alt} />;
  }

  return (
    <div
      className={classes}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--drp-font-primary)",
        fontWeight: 700,
        fontSize: size === "sm" ? "14px" : size === "lg" ? "32px" : "20px",
        background: "var(--drp-purple-20)",
        color: "var(--drp-purple)",
      }}
    >
      {initials || "?"}
    </div>
  );
}
