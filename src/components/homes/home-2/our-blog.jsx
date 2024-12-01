import our_blog_data from "@/src/data/our-blog-data";
import Link from "next/link";
import React from "react";

const OurBlog = () => {
  return (
    <>
      <div className="tp-it-blog theme-bg-2 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-12">
                <div className="section-title-wraper pb-80">
                  <div className="tp-section text-center">
                    <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                      <i className="before-border"></i>
                      Insights <i className="after-border"></i>
                    </span>
                    <h2 className="tp-section__title vogue-text-color wow tpfadeUp">
                      Our Blog & Insights
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {our_blog_data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className="it-blog mb-30 wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="it-blog__thumb w-img">
                    <div className="fix">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="it-blog-date">
                    <span><b>{item.date}</b> {item.month}</span>
                    </div>
                  </div>
                  <div className="it-blog-info white-bg">
                    <div className="it-blog__meta">
                      <span>
                        <Link href="#">
                          <b className="it-blog-cta">{item.category}</b>
                        </Link>
                      </span>
                      <span>
                        <Link href="#"> / By <b>{item.post_by}</b></Link>
                      </span>
                    </div>
                    <h3 className="it-blog__title">
                      <Link href="/blog"> {item.title} </Link>
                    </h3>
                    <p className="m-0">{item.post}</p>
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

export default OurBlog;
