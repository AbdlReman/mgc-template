import VideoPopup from '@/src/Modals/VideoPopup';
import React,{useState} from 'react';

const SerivceVideos = () => {

    const [isVideoOpen,setIsVideoOpen] = useState(false);


    return (
        <>
             <div className="tp-serivce-videos-blog">
         <div className="container-fluid g-0">
            <div className="row gx-0">
               <div className="col-12">
                  <div className="sv-page-video-section p-relative wow tpfadeUp" data-wow-delay=".3s">
                     <div className="sv-page-vd-img w-img">
                        <img src="/assets/img/services/sv-page-video-bg.jpg" alt="thtem-pure" /> 
                     </div>
                     <div className="sv-page-vido-icon">
                        <a 
                        // href="https://www.youtube.com/watch?v=g1u2_-Xz8qw"  
                        onClick={()=> setIsVideoOpen(true)} 
                        className="popup-video"><span><i className="fas fa-play"></i></span></a>
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
        videoId={"g1u2_-Xz8qw"}
      />
      {/* video modal end */}
        
        </>
    );
};

export default SerivceVideos;