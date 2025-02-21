import React from 'react';
import ptw from '../assets/Group 8909.png';
import wtp from '../assets/Group 8910.png';
import './Herosection.css';

function Herosection() {
  return (
    <div className='hero-container'>
      <div className='hero-section'>
        <img src={ptw} alt="PDF to Word" className="hero-image" />
        <h2 className="hero-title">How to convert Word to PDF online:</h2>
        <ol className="hero-list">
          <li>Upload your file to our online Word converter.</li>
          <li>File converter will instantly start the extraction process.</li>
          <li>OCR will activate if you upload a scanned document.</li>
          <li>Wait for the converter to finish and download your PDF file.</li>
        </ol>
      </div>
      <div className='hero-section'>
        <h2 className="hero-title">How to convert PDF to Word online:</h2>
        <ol className="hero-list">
          <li>Upload your file to our online PDF converter.</li>
          <li>Smallpdf will instantly start the extraction process.</li>
          <li>OCR will activate if you upload a scanned document.</li>
          <li>Wait for the converter to finish and download your Word file.</li>
        </ol>
        <img src={wtp} alt="Word to PDF" className="hero-image" />
      </div>
    </div>
  );
}

export default Herosection;
