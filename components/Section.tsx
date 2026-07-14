import { Container } from './Container';

export function Section({
  children,
  tinted = false,
  width = 'default',
  paddingY = '64px',
  bordered,
  className,
}: {
  children: React.ReactNode;
  tinted?: boolean;
  width?: 'narrow' | 'default' | 'wide';
  paddingY?: string;
  bordered?: 'top' | 'bottom' | 'both';
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        background: tinted ? 'var(--bg-panel)' : undefined,
        borderTop: bordered === 'top' || bordered === 'both' ? '1px solid var(--border)' : undefined,
        borderBottom: bordered === 'bottom' || bordered === 'both' ? '1px solid var(--border)' : undefined,
      }}
    >
      <Container width={width} style={{ padding: `${paddingY} 40px` }}>
        {children}
      </Container>
    </div>
  );
}
