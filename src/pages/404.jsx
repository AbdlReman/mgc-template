
import Link from "next/link";
import React from "react";
import SEO from "../common/seo";
import Footer from "../layout/footers/footer";
import Header from "../layout/headers/header";

const Error = () => {
  return (
    <>
    <SEO pageTitle={"404 error page"} />
      <Header />
      <div className="container">
        <div className="error_page">
            <img style={{ width: "100%" }} src="/assets/img/404.webp"></img>
          <Link href="/">
          <button className="tp-btn tp-btn-hover">Go To Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
