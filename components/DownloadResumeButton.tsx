'use client';

import { useState, useEffect, useRef } from 'react';
import { usePDF, type DocumentProps } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import ResumePDFATS from './ResumePDFATS';

function DownloadOption({
  label,
  subtext,
  fileName,
  document: doc,
  onDownload,
}: {
  label: string;
  subtext: string;
  fileName: string;
  document: React.ReactElement<DocumentProps>;
  onDownload: () => void;
}) {
  const [instance] = usePDF({ document: doc });
  const [downloading, setDownloading] = useState(false);

  function handleClick() {
    if (instance.loading || downloading || !instance.url) return;
    setDownloading(true);
    const link = document.createElement('a');
    link.href = instance.url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloading(false);
      onDownload();
    }, 300);
  }

  const busy = instance.loading || downloading;

  return (
    <div
      onClick={handleClick}
      style={{
        padding: '12px 16px',
        cursor: busy ? 'default' : 'pointer',
        minHeight: '44px',
        opacity: busy ? 0.6 : 1,
        transition: 'background 0.1s',
      }}
      onMouseEnter={(e) => {
        if (!busy) (e.currentTarget as HTMLDivElement).style.background = '#EEF2FF';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = 'transparent';
      }}
    >
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {busy ? 'Generating...' : label}
      </div>
      <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {subtext}
      </div>
    </div>
  );
}

export default function DownloadResumeButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: '#3730A3',
          color: '#FFFFFF',
          padding: '7px 14px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          border: 'none',
        }}
      >
        ↓ Download Experience
        <span style={{ fontSize: '10px', opacity: 0.8, marginLeft: '2px' }}>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            background: '#FFFFFF',
            border: '1px solid #E5E3DC',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            minWidth: '220px',
            zIndex: 50,
            overflow: 'hidden',
          }}
        >
          <div style={{ borderBottom: '1px solid #F3F2EE' }}>
            <DownloadOption
              key="interactive"
              label="Interactive Version"
              subtext="Designed, styled resume"
              fileName="manan-sachdeva-resume.pdf"
              document={<ResumePDF />}
              onDownload={() => setOpen(false)}
            />
          </div>
          <DownloadOption
            key="simple"
            label="Simple Version"
            subtext="Plain format"
            fileName="manan-sachdeva-resume-simple.pdf"
            document={<ResumePDFATS />}
            onDownload={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
