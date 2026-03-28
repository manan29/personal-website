'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Avatar() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to gradient M
    return (
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C2550A, #F97316)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        <span style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>M</span>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <Image
        src="/photo.jpg"
        alt="Manan Shah"
        width={72}
        height={72}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        onError={() => setImageError(true)}
        priority
      />
    </div>
  );
}
