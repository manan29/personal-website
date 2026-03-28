import type { Metadata } from 'next';

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
    <main>
      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '28px',
          fontWeight: '700',
          color: '#1A1A1A',
          marginBottom: '12px',
        }}
      >
        Courses
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: '#6B6B6B',
          marginBottom: '40px',
        }}
      >
        Practical sales training — frameworks I actually use, not theory. Pay once, keep forever.
      </p>

      {/* Course Cards */}
      <div>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #E2E0D8',
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '16px',
              background: '#fff',
            }}
          >
            {/* Tag */}
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '9.5px',
                fontWeight: '700',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#AAAAAA',
                border: '1px solid #E2E0D8',
                background: '#F5F4EF',
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
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: '700',
                color: '#1A1A1A',
                marginBottom: '8px',
              }}
            >
              {course.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14.5px',
                color: '#6B6B6B',
                lineHeight: '1.7',
                marginBottom: '16px',
              }}
            >
              {course.description}
            </p>

            {/* Price */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '22px',
                fontWeight: '700',
                color: '#C2550A',
                marginBottom: '16px',
              }}
            >
              {course.price}
            </div>

            {/* Button */}
            <button
              disabled={!course.available}
              style={{
                background: course.available ? '#C2550A' : '#E2E0D8',
                color: course.available ? '#fff' : '#AAAAAA',
                padding: '10px 24px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '14px',
                border: 'none',
                cursor: course.available ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-ui)',
              }}
            >
              {course.available ? 'Buy on Gumroad →' : 'Notify Me'}
            </button>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: '#6B6B6B',
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
            color: '#C2550A',
            textDecoration: 'underline',
          }}
        >
          Drop me a message on LinkedIn
        </a>{' '}
        to get notified.
      </p>
    </main>
  );
}
