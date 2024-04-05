import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `Daily care| ${title}`
            : "Daily_care services"}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/main.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
