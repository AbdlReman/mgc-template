import our_blog_data from "@/src/data/our-blog-data";
import Link from "next/link";
import React from "react";



const blog_content = {
    title: "Our Blogs",
    sub_title: "Blog & Insights",
    btn: "More News"
}

const {title, sub_title, btn}  = blog_content

const BlogArea = () => {
  return (
    <>
      <div className="da-blog-area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-title-wraper mb-60">
                <div className="tp-section">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp"
                    data-wow-delay=".3s"
                  > 
                     {title}
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    Our <span> {sub_title}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="da-blog-btn-wrapper text-md-end mb-60 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <Link
                  href="/blog-list"
                  className="tp-border-btn br-btn-bg-dark"
                >
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {our_blog_data.slice(3, 6).map((item, i) => (
              <div key={i} className="col-md-6 col-xl-4">
                <div
                  className="da-blog mb-30 wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="da-blog__thumb w-img">
                    <div className="fix">
                      <Link href="/blog-list">
                        {" "}
                        <img src={item.img} alt={item.title} />
                      </Link>
                    </div>
                    <div className="da-blog-date">
                      <span>
                        <b>{item.date}</b> {item.month}
                      </span>
                    </div>
                  </div>
                  <div className="da-blog-info white-bg">
                    <div className="blog-inner-zin">
                      <div className="da-blog__meta">
                        <span>
                          <Link href="#">
                            <b className="da-blog-cta">{item.category}</b>
                          </Link>
                        </span>
                        <span>
                          <Link href="#">
                            / By <b> {item.post_by}</b>
                          </Link>
                        </span>
                      </div>
                      <h3 className="da-blog__title">
                        <Link href="/blog-list">{item.title}</Link>
                      </h3>
                      <p className="m-0"> {item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
