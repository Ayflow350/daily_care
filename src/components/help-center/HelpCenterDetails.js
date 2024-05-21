import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaRegEnvelope, FaRegListAlt, FaDownload } from "react-icons/fa";
import { helpCenterFaqDetails, statements } from "../../utils/data";
import ApplyForm from "src/components/contact-us/ApplyForm";
import ApplyFormTwo from "src/components/contact-us/ApplyFormTwo";
import WorkHistory from "src/components/contact-us/WorkHistory";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Conflict from "@components/statement/Conflict";
import Release from "@components/statement/Release";

import ImageGrid from "@components/ImageGrid";
import Confidential from "@components/statement/Confidential";
const HelpCenterDetails = () => {
  return (
    <>
      <ApplyForm />
    </>
  );
};

export default HelpCenterDetails;
