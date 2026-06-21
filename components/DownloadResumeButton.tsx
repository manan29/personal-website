'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import ResumePDFATS from './ResumePDFATS';

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
      {/* Main toggle button */}
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

      {/* Dropdown */}
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
          {/* Option 1: Interactive */}
          <PDFDownloadLink
            document={<ResumePDF />}
            fileName="manan-sachdeva-resume.pdf"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            {({ loading }) => (
              <div
                onClick={() => setOpen(false)}
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #F3F2EE',
                  cursor: 'pointer',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = '#EEF2FF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {loading ? 'Generating...' : 'Interactive Version'}
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Designed, styled resume
                </div>
              </div>
            )}
          </PDFDownloadLink>

          {/* Option 2: ATS */}
          <PDFDownloadLink
            document={<ResumePDFATS />}
            fileName="manan-sachdeva-resume-ats.pdf"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            {({ loading }) => (
              <div
                onClick={() => setOpen(false)}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = '#EEF2FF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {loading ? 'Generating...' : 'ATS-Optimized Version'}
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Plain format for job applications
                </div>
              </div>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
