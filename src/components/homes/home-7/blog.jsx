import our_blog_data from "@/src/data/our-blog-data";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="tp-it-blog  pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-12">
                <div className="section-title-wraper pb-80">
                  <div className="tp-section text-center">
                    <h2 className="tp-section__title wine-text-color wow tpfadeUp">
                      Our Blog &amp; Insights
                    </h2>
                    <p className="text-grey wow tpfadeUp" data-wow-delay=".3s">
                      A lawyer's content marketing strategy should include
                      adding &
                      <br />
                      updating your most important.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            

            {our_blog_data.slice(13, 16).map((item, i) => <div key={i} className="col-lg-4">
                <div
                    className="it-blog law-blog mb-30 wow tpfadeUp"
                    data-wow-delay={item.delay}
                >
                    <div className="it-blog__thumb w-img">
                    <div className="fix">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="it-blog-date">
                        <span>
                        <b>{item.date}</b> {item.month}
                        </span>
                    </div>
                    </div>
                    <div className="it-blog-info white-bg">
                    <div className="it-blog__meta">
                        <span>
                        <a href="#">
                            <b className="it-blog-cta">{item.category}</b>
                        </a>
                        </span>
                        <span>
                        <a href="#">
                            / By <b> {item.post_by}</b>
                        </a>
                        </span>
                    </div>
                    <h3 className="it-blog__title">
                        <Link href="/blog-details"> {item.title}</Link>
                    </h3>
                    <p className="m-0">
                         {item.des}
                    </p>
                    </div>
                </div>
                </div>
                
                )
            }

            


          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
