import our_blog_data from "@/src/data/our-blog-data";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="ca-blog-area pb-90">
        <div className="ca-blog-area-bg pt-120 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title-wraper">
                  <div className="tp-section text-center">
                    <span
                      className="tp-section__subtitle shadow-none text-white mb-15 p-0 wow tpfadeUp"
                      data-wow-delay=".3s"
                    >
                      Our News
                    </span>
                    <h2
                      className="tp-section__title text-white mb-40 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      Our Blog & Insights
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-0 ">
            {our_blog_data.slice(16, 19).map((item, i) => (
              <div
                key={i}
                className="col-lg-4 wow tpfadeUp"
                data-wow-delay={item.delay}
              >
                <div
                  className="ca-blog-item d-flex flex-column justify-content-between"
                  data-background={item.img}
                  style={{
                    backgroundImage: `url(${item.img ? item.img : null})`,
                  }}
                >
                  <div className="ca-blog-item__date">
                    <span>
                      <i className="fal fa-calendar-alt"></i> 
                      {new Date().getMonth()} {new Date().getDate()}, 
                      {new Date().getFullYear()}
                    </span>
                  </div>
                  <div className="ca-blog-item__content">
                    <div className="ca-blog-item__content-meta">
                      <span>
                        <a href="#">{item.category}</a> / By 
                        <a href="#"> {item.post_by}</a>
                      </span>
                    </div>
                    <h3 className="ca-blog-item__content-title">
                      <Link href="/blog-details">{item.title} </Link>
                    </h3>
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

export default Blog;
