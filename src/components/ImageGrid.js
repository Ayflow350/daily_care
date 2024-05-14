// import React from "react";
// import Link from "next/link";

const { RiFacebookBoxFill } = require("react-icons/ri");

// const pdfFiles = [
//   {
//     id: 1,
//     url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf",
//     name: "CJIS_Form",
//   },

//   // Add more PDF files
// ];

// const PdfCard = ({ url, name }) => (
//   <div className="col">
//     <div className="card">
//       <iframe src={url} width="300%" height="300" frameBorder="0"></iframe>
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//       </div>
//       <div className="mb-5 d-flex justify-content-around">
//         <button className="btn btn-primary">
//           <Link href={url} download>
//             Download
//           </Link>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const ImageGrid = () => {
//   return (
//     <body>
//       <div className="container py-5">
//         <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
//           {pdfFiles.map((pdf) => (
//             <PdfCard key={pdf.id} url={pdf.url} name={pdf.name} />
//           ))}
//         </div>
//       </div>
//     </body>
//   );
// };

// export default ImageGrid;

import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const uploadUrl = "https://api.cloudinary.com/v1_1/drczkfgqp/file/upload"; // Replace with your upload endpoint
      const response = await axios.post(uploadUrl, formData);

      setFileUrl(response.data.fileUrl);
      console.log("File uploaded successfully:", response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col mb-3">
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>
        <div className="col mb-3">
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>

      {fileUrl && (
        <div className="row">
          <div className="col">
            <p>
              File Uploaded:{" "}
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
