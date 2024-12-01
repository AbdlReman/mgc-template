import React from "react";
import CtaArea from "../homes/home/cta-are";



// working_process_data 
const working_process_data = [
    {
        id: 1,
        bg_color: "",
        icon: "flaticon-sketchbook",
        title: "Strat From Sketch",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 2,
        bg_color: "cornblue-bg",
        icon: "flaticon-sketchbook",
        title: "Creative Process",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 3,
        bg_color: "orange-bg",
        icon: "flaticon-sketchbook",
        title: "Design & Development",
        desctiption: "Maximize your presence on search engine results pages.",

    },
    {
        id: 4,
        bg_color: "blue-bg",
        icon: "flaticon-sketchbook",
        title: "Design & Development",
        desctiption: "Maximize your presence on search engine results pages.",

    },
]

// img_gallery_working_process

const img_gallery_working_process = [
    "/assets/img/portfolio/pf-details-gl-1.jpg",
    "/assets/img/portfolio/pf-details-gl-2.jpg",
    "/assets/img/portfolio/pf-details-gl-3.jpg",
]


// study_overview
const study_overview = [
    {
        id:1, 
        lists : [
             <>When it comes to Headless CMS systems, I’m a big fan of Ghost. Ghost is open-source and simple to use.</>,
             <>Oh, and it’s 100% free to set up and run. That’s because we will be running our Ghost instance locally</>
        ]
    },
    {
        id:2, 
        lists : [
             <>In this article, I will show you how you can use Ghost and  Gatsby together to get the ultimate personal blog</>,
             <>and then deploying to Netlify, taking advantage of their generous free tier.</>
        ]
    }
]


const PortfolioDetailsArea = () => {

  return (
    <>
      <div className="tp-pf-details-page-area pt-120 wow tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">
                <div className="pf-details-banner-img1 w-img">
                  <img src="/assets/img/portfolio/pf-details-thum.jpg" alt="" />
                </div>
                <div className="pf-details-banner__info">
                  <div className="row align-items-center align-items-xl-start">
                    <div className="col-lg-8">
                      <div className="pf-details-banner__info-left">
                        <span>
                          <b>Category:</b> Design & Development
                        </span>
                        <span>
                          <b>Category:</b> Client: Sharif Da Gazi
                        </span>
                        <span>
                          <b> Budget:</b>$12,000
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="pf-details-banner__info-right text-lg-end">
                        <a href="#">
                          Live Preview
                          <span>
                            <i className="fal fa-long-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main pt-60">
        <div className="container wow tpfadeUp">
          <h3 className="tp-blog-detials-title mb-25">Case study overview</h3>
          <p>
            When it comes to tools for publishing a blog, it can seem like
            there’s never a perfect solution that mixes customization with easy
            admin. In this article, we will see step-by-step how you can get the
            best of both worlds by using Ghost as a headless <b>CMS</b> for a
            Gatsby static site. We will cover all the tricky parts in-depth and
            show you can do everything for free. These days it seems there are
            an endless number of tools and platforms for creating your own blog.{" "}
            <b>However</b>, lots of the options out there lean towards{" "}
            <a href="#">non-technical</a> users and abstract away all of the
            options for customization and truly making something your own.{" "}
            <br />
            <br />
          </p>
          <h3 className="tp-blog-detials-title mb-25">Case study overview</h3>
          <p>
            Enter the Headless Content Management System (CMS). With a Headless
            CMS, you can get all of the tools to create and organize your
            content, while maintaining 100% control of how it is delivered to
            your readers.
          </p>
          <div className="pf-deatials-fea mb-60">
            <div className="row">
              {study_overview.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="tp-bs-about-fea border-bottom-0 mr-30">
                    <ul>
                      {item.lists.map((list, i) => (
                        <li>
                          <i className="fal fa-check"></i>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pf-dt-img-gallery mb-30">
            <div className="row">
              {img_gallery_working_process.map((item, i) => (
                <div key={i} className="col-lg-4 wow tpfadeUp">
                  <div
                    className="pf-details-img-gl w-img mb-30 "
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                    <img src={item} alt="theme-pure" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3
            className="tp-blog-detials-title mb-25 wow tpfadeUp"
            data-wow-delay
          >
            Working process
          </h3>
          <p className="wow tpfadeUp">
            Enter the Headless Content Management System (CMS). With a Headless
            CMS, you can get all of the tools to create and organize your
            content, while maintaining 100% control of how it is delivered to
            your readers.
          </p>

          <div className="pf-dt-process-wrapper pb-60">
            <div className="row">
              {working_process_data.map((item, i) => (
                <div key={i} className="col-lg-4 col-xl-3">
                  <div className="pf-dt-process-item  wow tpfadeUp text-center mb-60">
                    <div className="pf-dt-process-item__border mb-25">
                      <div
                        className={`pf-dt-process-item__icon ${item.bg_color}`}
                      >
                        <span>
                          <i className={item.icon}></i>
                        </span>
                      </div>
                    </div>
                    <h3 className="pf-dt-process-item__title mb-10">
                      <a href="#">{item.title}</a>{" "}
                    </h3>
                    <p>{item.desctiption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- cta are  --> */}
        <CtaArea />  
        {/* <!-- cta end --> */}
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
