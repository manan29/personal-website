'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

export default function DownloadResumeButton() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="manan-sachdeva-resume.pdf"
      style={{ textDecoration: 'none' }}
    >
      {({ loading }) => (
        <span
          style={{
            display: 'inline-block',
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
          }}
        >
          {loading ? 'Generating...' : '↓ Download Experience'}
        </span>
      )}
    </PDFDownloadLink>
  );
}
