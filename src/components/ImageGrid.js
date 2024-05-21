import React, { useState } from "react";

const pdfFiles = [
  {
    id: 1,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf",
    name: "CJIS",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/6_Physical_Examination_Form_ptmsrw.pdf",
    name: "Physical Examination",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475047/7_Tax_Form_W-4_5_ib6aoo.pdf",
    name: "Tax Forms",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475049/5_i-9_3_vlem4s.pdf",
    name: "Eligibility Form",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf",
    name: "Payroll",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475055/9_W_9_1099_0nly_hzgziz.pdf",
    name: "Request",
  },
  // Add more PDF files
];

const ImageGrid = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    // Example upload logic
    try {
      const response = await fetch("your-upload-url", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFileUrl(data.url); // Assuming the response contains the file URL
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container py-5 flex  d-flex flex-column align-items-center text-center">
      <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
        {pdfFiles.map((file) => (
          <div className="col" key={file.id}>
            <div className="card">
              <iframe
                src={file.url}
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{file.name}</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href={file.url}
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <input type="file" onChange={handleFileChange} />
              </div>
              {fileUrl && <img src={fileUrl} alt="Uploaded" />}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleUpload} className="btn btn-primary mt-4 w-100">
        Upload
      </button>
    </div>
  );
};

export default ImageGrid;
