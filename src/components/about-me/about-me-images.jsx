import React from "react";
import Tilt from "react-parallax-tilt";

const about_images = [
  "assets/img/about/about-me-2.jpg",
  "assets/img/about/about-me-3.jpg",
  "assets/img/about/about-me-4.jpg",
];

const AboutMeImages = () => {
  return (
    <>
      <div className="about-me-images-wapper pb-90">
        <div className="container">
          <div className="row">
            {about_images.map((img, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow tpfadeUp">
                <div
                  className="about-img-2 w-img mb-30"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                    <img src={img} alt="" />
                  </Tilt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeImages;
