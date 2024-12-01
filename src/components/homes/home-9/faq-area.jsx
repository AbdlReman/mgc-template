import Accordion from '@/src/common/accordion';
import VideoPopup from '@/src/Modals/VideoPopup';
import React, {useState} from 'react'; 

const FaqArea = () => {

    const [isVideoOpen,setIsVideoOpen] = useState(false);


    return (
        <>
            <div className="tp-ha-faq-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-lg-center align-items-xl-start">


                    <div className="col-xl-5 col-lg-6 wow tpfadeUp">

                        <div className="section-title-wraper">
                            <div className="tp-section">
                                <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0">FAQ</span>
                                <h2 className="tp-section__title mb-30 text-mirage">Get some Q. Answer</h2>
                            </div>
                        </div>

                        <div className="accordion tp-accordion mr-20" id="accordionExample">
                            <Accordion />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 wow tpfadeUp">
                        <div className="app-faq-img float-end position-relative">
                            <img src="/assets/img/faq/ha-fag-img.jpg" alt="" />
                            <div className="faq-vidoe-play-btn-wrapper">
                                <button
                                onClick={()=> setIsVideoOpen(true)}
                               
                                    className="faq-vidoe-play-btn popup-video"><i className="fas fa-play"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"6zYM-NcP32k"}
      />
      {/* video modal end */}
        </>
    );
};

export default FaqArea;