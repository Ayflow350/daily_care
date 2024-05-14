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

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setFileUrl(data.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileUrl && <img src={fileUrl} alt="Uploaded" />}
    </div>
  );
};

export default FileUpload;
