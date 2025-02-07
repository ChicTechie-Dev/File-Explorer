import "./styles.css";
import {useState} from 'react';

export default function DragFile() {
    const [dragOver, setDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragOver(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setDragOver(false);
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Handle file upload here
    };
  return (
    <div className="App">
     <div
        className={`drop-zone ${dragOver ? "drag-over" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p class='input-title' >Drop file here or click to select file </p>
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
        <button className="choose-file-btn" onClick={() => document.querySelector('.file-input').click()}>Choose file</button>
      </div>
      {selectedFile && (
        <div className="selected-file">
          <p>{selectedFile.name}</p>
          <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
}