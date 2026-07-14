export function Card({
  children,
  padded = true,
  style,
  className,
}: {
  children: React.ReactNode;
  padded?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--bg-panel)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: padded ? '20px 22px' : 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
