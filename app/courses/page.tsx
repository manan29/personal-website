import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'Courses — Manan Sachdeva',
};

export default function CoursesPage() {
  const courses = [
    {
      tag: 'COMING SOON',
      title: 'Discovery That Actually Works',
      description:
        'My exact 5-question discovery framework that I use on every call. Includes call recording breakdowns, objection handling scripts, and the qualification checklist I use before investing in any deal.',
      price: '₹2,999',
      available: false,
    },
    {
      tag: 'COMING SOON',
      title: 'Building Your First Sales Team',
      description:
        'How to hire your first 3 SDRs and 2 AEs without burning budget. Covers job descriptions, interview frameworks, onboarding, and the 90-day ramp plan I wish I had.',
      price: '₹3,999',
      available: false,
    },
    {
      tag: 'COMING SOON',
      title: 'Cold Outbound Playbook',
      description:
        'The exact email sequences, LinkedIn cadences, and call scripts that get replies. Real examples with open rates and reply rates included.',
      price: '₹1,999',
      available: false,
    },
  ];

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: '12px',
        }}
      >
        Courses
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '15px',
          color: 'var(--muted)',
          marginBottom: '40px',
        }}
      >
        Practical sales training — frameworks I actually use, not theory. Pay once, keep forever.
      </p>

      {/* Course Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {courses.map((course, index) => (
          <Card key={index} style={{ padding: '24px' }}>
            {/* Tag */}
            <div
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                borderRadius: '3px',
                padding: '3px 8px',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              {course.tag}
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '8px',
              }}
            >
              {course.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '14.5px',
                color: 'var(--muted)',
                lineHeight: '1.7',
                marginBottom: '16px',
              }}
            >
              {course.description}
            </p>

            {/* Price */}
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--accent)',
                marginBottom: '16px',
              }}
            >
              {course.price}
            </div>

            {/* Button */}
            <button
              disabled={!course.available}
              style={{
                background: course.available ? 'var(--ink)' : 'var(--border)',
                color: course.available ? 'var(--bg)' : 'var(--muted)',
                padding: '10px 24px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: course.available ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-work-sans)',
              }}
            >
              {course.available ? 'Buy on Gumroad →' : 'Notify Me'}
            </button>
          </Card>
        ))}
      </div>

      {/* Note */}
      <p
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '13px',
          color: 'var(--muted)',
          fontStyle: 'italic',
          marginTop: '32px',
        }}
      >
        Courses launching soon.{' '}
        <a
          href="https://www.linkedin.com/in/manansachdeva/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--accent)',
            textDecoration: 'underline',
          }}
        >
          Drop me a message on LinkedIn
        </a>{' '}
        to get notified.
      </p>
    </Container>
  );
}
