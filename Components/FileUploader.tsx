"use client";
import { useState } from "react";

const FileUploader = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [folderName, setFolderName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<{ fileName: string; url: string }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (!files || !folderName) {
      alert("Please select files and enter a folder name");
      return;
    }

    setUploading(true);

    try {
      const fileData = await Promise.all(
        Array.from(files).map(async (file) => {
          return new Promise<{ name: string; data: string }>((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = () => {
              const base64String = reader.result as string;
              // Remove the data URL prefix and get only the base64 data
              const base64Data = base64String.split(',')[1];
              
              resolve({
                name: file.name,
                data: base64Data
              });
            };
            
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
        })
      );

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folderName, fileData }),
      });

      const data = await res.json();

      if (res.ok) {
        setUploadedUrls(data.urls);
        alert("Files uploaded successfully!");
      } else {
        throw new Error(data.error || "Error uploading files");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Files to S3</h2>
      <input
        type="text"
        placeholder="Folder Name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        accept="image/*"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>
      {uploadedUrls.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Uploaded Files:</h3>
          <ul className="mt-2 text-blue-600">
            {uploadedUrls.map((file, index) => (
              <li key={index}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;