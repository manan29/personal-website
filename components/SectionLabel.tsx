export function SectionLabel({
  children,
  id,
  style,
}: {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: 'var(--font-jetbrains)',
        fontSize: '12px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginBottom: 8,
        marginTop: 64,
        paddingBottom: 10,
        borderBottom: '1px solid var(--border)',
        scrollMarginTop: '80px',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
