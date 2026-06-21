export default function InsightsPage() {
  const categories = [
    { name: 'Complex Deals', href: '/blog/large-deal-learnings' },
    { name: 'Hiring & Talent', href: '/blog/hiring-top-talent' },
    { name: 'Sales Systems', href: '/blog/sales-systems' },
  ];

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '26px', fontWeight: 500, color: '#1A1A1A', marginBottom: '8px' }}>Insights</h1>
      <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px' }}>Pick a category to explore.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {categories.map((cat) => (
          <a key={cat.name} href={cat.href} style={{
            padding: '10px 20px',
            borderRadius: '100px',
            border: '1px solid #3730A3',
            color: '#3730A3',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            background: '#EEF2FF',
          }}>{cat.name}</a>
        ))}
      </div>
    </div>
  );
}
