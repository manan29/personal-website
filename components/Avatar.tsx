'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Avatar({ size = 96 }: { size?: number }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-hover), var(--accent))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span style={{ color: 'var(--bg)', fontSize: size * 0.42, fontWeight: 700 }}>M</span>
      </div>
    );
  }

  return (
    <Image
      src="/photo.png"
      alt="Manan Sachdeva"
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
        flexShrink: 0,
      }}
      onError={() => setImageError(true)}
      priority
    />
  );
}
