import { getAllDeals } from '@/lib/content';
import { DealsClient } from '@/components/DealsClient';
import { Container } from '@/components/Container';

export default function DealLearningsPage() {
  const deals = getAllDeals();

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: '32px',
        }}
      >
        Deal Learnings
      </h1>

      <DealsClient deals={deals} />
    </Container>
  );
}
