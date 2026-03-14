import { getAllDeals } from '@/lib/content';
import { DealsClient } from '@/components/DealsClient';

export default function DealLearningsPage() {
  const deals = getAllDeals();

  return (
    <main>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
        }}
      >
        Deal Learnings
      </h1>

      <DealsClient deals={deals} />
          </div>
    </main>
  );
}
