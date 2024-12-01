
import ImagePopup from "@/src/Modals/ImagePopup";
import Link from "next/link";
import React, {useState} from "react";
import Tilt from "react-parallax-tilt";



const portfolio_list = [
    {
        id: 1, 
        img: "/assets/img/portfolio/ptg-portfilo-1.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-30",
        cls: 'pta-pt-img-large',
    } ,
    {
        id: 2, 
        img: "/assets/img/portfolio/ptg-portfilo-2.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-30",
        cls: 'text-center',
    },
    {
        id: 3, 
        img: "/assets/img/portfolio/ptg-portfilo-3.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-100",
        cls: 'text-center',
    },
    {
        id: 4, 
        img: "/assets/img/portfolio/ptg-portfilo-4.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-100",
        cls: 'pta-pt-img-large',
    },
    {
        id: 5, 
        img: "/assets/img/portfolio/ptg-portfilo-5.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-100",
        cls: 'pta-pt-img-large',
    },
    {
        id: 6, 
        img: "/assets/img/portfolio/ptg-portfilo-6.jpg",
        subtitle: "Landscaping, Outdoor",
        title: "oliza pablo photo",
        delay: ".3s",
        mb: "mb-100",
        cls: 'text-center',
    },
]



const Portfolio = () => {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);

  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  
  //  images
  const img = portfolio_list.map((item) => item.img);



  return (
    <>
      <div className="ptg-portfolio dark-bg-2 pt-120 pb-120" id="ptg-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">
                    Photo Showcase
                  </span>
                  <h2
                    className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    our <span> case study</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            {portfolio_list.map((item, i) => (
              <div key={i} className="col-lg-6">
                <div
                  className={`ptg-portfolio-item ${item.mb}  p-relative wow tpfadeUp`}
                  data-wow-delay={item.delay}
                >
                  <div
                    className={`ptg-portfolio-item-img ${item.cls}`}
                    data-tilt
                    data-tilt-perspective="2000"
                  >
                   
                      <Tilt
                        // className="tilt-img"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={900}
                        scale={1}
                        transitionSpeed={1000}
                        gyroscope={true}
                      >
                         <a
                            style={{ cursor: "pointer" }}
                            onClick={() => handleImagePopup(i)}
                            className="ptg-portfilo"
                            >
                        <img src={item.img} alt="pt1" />



                    </a>
                      </Tilt>
                  </div>
                  <div className="ptg-portfolio-item-info">
                    <span className="ptg-portfolio-item-subtitle">
                      {item.subtitle}
                    </span>
                    <h3 className="ptg-portfolio-item-title">
                      <a href="#">{item.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div
              className="ptg-rgp-btn-wrapper text-center wow tpfadeUp"
              data-wow-delay=".4s"
            >
              <Link href="/portfolio-4" className="tp-grd-btn">
                load more
                <span className="ml-10">
                  <i className="fal fa-plus"></i>
                  <i className="fal fa-plus"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Portfolio;
