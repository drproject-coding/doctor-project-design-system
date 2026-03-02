export interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
}

export function Marquee({
  items,
  separator = "+++",
  speed = 20,
  className = "",
}: MarqueeProps) {
  const track = items.flatMap((item, i) =>
    i < items.length - 1 ? [item, separator] : [item],
  );
  // Duplicate for seamless loop
  const doubled = [...track, ...track];

  return (
    <div className={`bru-marquee ${className}`}>
      <div
        className="bru-marquee__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((text, i) => (
          <span key={i} className="bru-marquee__item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
