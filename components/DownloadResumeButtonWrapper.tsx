'use client';

import dynamic from 'next/dynamic';

const DownloadResumeButton = dynamic(
  () => import('./DownloadResumeButton'),
  { ssr: false, loading: () => null }
);

export default function DownloadResumeButtonWrapper() {
  return <DownloadResumeButton />;
}
