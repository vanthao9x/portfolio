import React from "react";
export default function ResumeModel({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <img
          src="/resume.png"
          alt="My Resume"
          className="w-full h-auto rounded"
        />
        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
        <button
          onClick={onClose}
          className="mt-4 text-center w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
