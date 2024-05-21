import React, { useState } from "react";
import axios from "axios";

const ImageGrid = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevFormData) => {
        const newFormData = new FormData();
        // Append existing entries from prevFormData
        for (const [key, value] of prevFormData.entries()) {
          newFormData.append(key, value);
        }
        // Append the new file with a consistent field name
        newFormData.append("files", file);
        return newFormData;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way
    try {
      const response = await axios.post(
        "https://new-backend-xfge.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">
        Download The Forms Below, fill them, upload all and submit at once
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">CJIS</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "CJIS")}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/6_Physical_Examination_Form_ptmsrw.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Physical Examination</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/6_Physical_Examination_Form_ptmsrw.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Physical Examination")}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475047/7_Tax_Form_W-4_5_ib6aoo.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Payroll</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475047/7_Tax_Form_W-4_5_ib6aoo.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Payroll")}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475049/5_i-9_3_vlem4s.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Request</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475049/5_i-9_3_vlem4s.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Request")}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Tax Forms</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Tax Forms")}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Eligibility Form</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf"
                  className="btn btn-primary"
                  download
                  style={{ borderRadius: "50px", width: "120px" }}
                >
                  Download
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Eligibility Form")}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;
