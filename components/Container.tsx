export function Container({
  children,
  width = 'default',
  className,
  style,
}: {
  children: React.ReactNode;
  width?: 'narrow' | 'default' | 'wide';
  className?: string;
  style?: React.CSSProperties;
}) {
  const maxWidth =
    width === 'narrow' ? 'var(--container-narrow)' : width === 'wide' ? 'var(--container-wide)' : 'var(--container-max)';

  return (
    <div
      className={className}
      style={{
        maxWidth,
        margin: '0 auto',
        padding: '0 40px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
