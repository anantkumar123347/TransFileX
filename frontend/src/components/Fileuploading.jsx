import React, { useState } from "react";
import { AiFillFile } from "react-icons/ai";
import "./Fileuploading.css";

function Fileuploading() {
  const [file, setFile] = useState(null);
  const [outputType, setOutputType] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleOutputChange = (event) => {
    setOutputType(event.target.value);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    if (!outputType) {
      alert("Please select an output type.");
      return;
    }
    console.log("File to upload:", file);
    console.log("Desired output type:", outputType);
  };

  return (
    <div className="container">
      <div className="outerdiv">
        <div className="innerdiv">
          <div className="icon-container">
            <AiFillFile className="file-icon" />
          </div>
          <div className="input-container">
            <label htmlFor="fileInput" className="file-label">
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="file-input"
            />
            {file && (
              <div className="file-info">
                <strong>Selected File:</strong> {file.name}
              </div>
            )}
            <br />
            <select
              value={outputType}
              onChange={handleOutputChange}
              className="select-output"
            >
              <option value="">Select output type</option>
              <option value="pdf">PDF</option>
              <option value="doc">DOC</option>
              <option value="docx">DOCX</option>
            </select>
            <br />
            <button onClick={handleUpload} className="upload-button">
              Upload
            </button>
            <br />
            <h2 className="drop-text">or drop File's here</h2>
            {outputType && (
              <div className="output-info">
                <strong>Output Type:</strong> {outputType}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fileuploading;
