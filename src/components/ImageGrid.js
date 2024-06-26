import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageGrid = () => {
  const [formData, setFormData] = useState(new FormData());
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevFormData) => {
        const newFormData = new FormData();
        // Append existing entries from prevFormData
        for (const [key, value] of prevFormData.entries()) {
          newFormData.append(key, value);
        }
        // Append the new file with a unique field name based on the category
        newFormData.append(fieldName, file);
        return newFormData;
      });
      console.log(formData);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way
    setIsLoading(true); // Start loading spinner
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
      toast.success("Upload successful!");
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Error uploading files: " + error.message);
    } finally {
      setIsLoading(false); // Stop loading spinner once the response is received
    }
  };

  return (
    <div className="container py-5">
      {isLoading && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div style={{ marginLeft: "10px", color: "white" }}>
            <ClipLoader
              size={100} // Customize size
              color={"#0000FF"} // Customize color (blue)
            />
          </div>
        </div>
      )}
      <h1 className="text-center">
        Download The Forms Below, fill them, upload all and submit at once
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Each card represents a form */}
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          {/* CJIS Form */}
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

          {/* Additional forms follow the same pattern */}

          {/* Physical Examination Form */}
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

            {/* Card content */}
            <div className="mt-5">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "Physical Examination")}
              />
            </div>
          </div>

          {/* Payroll Form */}
          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Payroll</h5>
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
                onChange={(e) => handleFileChange(e, "Payroll")}
              />
            </div>
          </div>

          {/* Request Form */}
          <div className="col">
            {" "}
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
                onChange={(e) => handleFileChange(e, "Request")}
              />
            </div>
          </div>

          {/* Tax Forms */}
          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475055/9_W_9_1099_0nly_hzgziz.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Tax Forms</h5>
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <a
                  href="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475055/9_W_9_1099_0nly_hzgziz.pdf"
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

          {/* Eligibility Form */}
          <div className="col">
            <div className="card">
              <iframe
                src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475049/5_i-9_3_vlem4s.pdf"
                width="100%"
                height="200"
                frameBorder="0"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">Eligibility Form</h5>
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
                onChange={(e) => handleFileChange(e, "Eligibility Form")}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit All Files
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ImageGrid;
