import React, { useState } from "react";
import ValidateFileModal from "./ValidateFileModal";
import ArtifactPreview from "./ArtifactPreview";

const UploadEvidence = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submittedFiles, setSubmittedFiles] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      setShowModal(true);
    }
  };

  const handleValidation = (result) => {
    setShowModal(false);
    if (result.success) {
      setSubmittedFiles([...submittedFiles, selectedFile]);
      setSelectedFile(null);
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">Upload Evidence</h2>

      <input type="file" onChange={handleFileChange} className="border p-2 rounded" />

      <button
        onClick={handleSubmit}
        className="bg-[#1F2937] text-white py-2 px-4 rounded hover:bg-[#2c3542]"
        disabled={!selectedFile}
      >
        Submit Evidence
      </button>

      <ValidateFileModal
        file={selectedFile}
        open={showModal}
        onClose={handleValidation}
      />

      <ArtifactPreview files={submittedFiles} />
    </div>
  );
};

export default UploadEvidence;