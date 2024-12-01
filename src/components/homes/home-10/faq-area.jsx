import Accordion from '@/src/common/accordion';
import VideoPopup from '@/src/Modals/VideoPopup';
import React, {useState} from 'react';
import Tilt from 'react-parallax-tilt';




const faq_content = {
    title: "Our Companys Some Q &Answer",
    bg_img: "/assets/img/faq/seo-faq.png",
    youtube_img: "/assets/img/faq/red-youtube-btn.png",
}

const {title, bg_img, youtube_img} = faq_content


const FaqArea = () => {

    const [isVideoOpen,setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="seo-faq-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 wow tpfadeUp">
                        <div className="seo-faq-cotent mb-30">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title seagreen-text-color mb-45"> {title}
                                    </h2>
                                </div>
                            </div>
                            <div className="accordion tp-accordion" id="accordionExample">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 wow tpfadeUp" data-wow-delay=".4s">
                        <div className="seo-faq-img p-relative mb-30" data-tilt="" data-tilt-perspective="2000">
                        <Tilt
                            className="tilt-img"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            transitionSpeed={1000}
                            gyroscope={true}
                            >    
                            <img src={bg_img} alt="theme-pure" />


                            <div className="seo-yt-btn">
                                <a 
                                onClick={()=> setIsVideoOpen(true)}
                                className="popup-video"><img src={youtube_img} alt="theme-pure" /></a>
                            </div>

                            </Tilt>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"gmB_TC92I8w"}
      />
      {/* video modal end */}
        </>
    );
};

export default FaqArea;