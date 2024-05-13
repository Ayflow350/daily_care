import React from "react";
import Link from "next/link";

const pdfFiles = [
  {
    id: 1,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/4._CJIS_Form.docx_2_yguapc.pdf",
    name: "CJIS_Form",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/6_Physical_Examination_Form_ptmsrw.pdf",
    name: "Physical_Examination",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475047/7_Tax_Form_W-4_5_ib6aoo.pdf",
    name: "Physical_Examination",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475049/5_i-9_3_vlem4s.pdf",
    name: "Physical_Examination",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf",
    name: "Physical_Examination",
  },
  {
    id: 5,
    url: "",
    name: "Physical_Examination",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/drczkfgqp/image/upload/v1715475048/6_Physical_Examination_Form_ptmsrw.pdf",
    name: "Physical_Examination",
  },

  // Add more PDF files
];

const PdfCard = ({ url, name }) => (
  <div className="col">
    <div className="card">
      <iframe src={url} width="300%" height="300" frameBorder="0"></iframe>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="mb-5 d-flex justify-content-around">
        <button className="btn btn-primary">
          <Link href={url} download>
            Download
          </Link>
        </button>
      </div>
    </div>
  </div>
);

const ImageGrid = () => {
  return (
    <body>
      <div className="container py-5">
        <h1 className="text-center">Popular Dishes</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          {pdfFiles.map((pdf) => (
            <PdfCard key={pdf.id} url={pdf.url} name={pdf.name} />
          ))}
        </div>
      </div>
    </body>
  );
};

export default ImageGrid;
