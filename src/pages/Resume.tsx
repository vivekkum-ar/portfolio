import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
interface ResumeProps {
  // Add your prop types here
}

const Resume: React.FC<ResumeProps> = ({}) => {
  return (
    <>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

</Worker>
<div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>
    <Viewer fileUrl="/images/res.pdf" />
</div>
    </>
  )
}

export default Resume