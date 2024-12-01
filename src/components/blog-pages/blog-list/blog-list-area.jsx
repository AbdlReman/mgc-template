import VideoPopup from '@/src/Modals/VideoPopup';
import Link from 'next/link';
import React,{useState} from 'react';
import Category from '../category';
import PopularFeeds from '../popular-feeds';
import SidebarSearch from '../sidebar-search';
import Tags from '../tags';

const BlogListArea = () => {


   const [isVideoOpen,setIsVideoOpen] = useState(false);



    return (
        <>
            <div className="postbox__area pt-120 pb-120">
         <div className="container">
            <div className="row">

               {/* left site */} 

               <div className="col-xxl-9 col-xl-9 col-lg-8 col-12">
                  <div className="postbox__wrapper pr-50 mr-30">


                     <article className="postbox__item format-stander mb-30 transition-3">
                        <div className="postbox__thumb p-relative">
                           <Link href="/blog-details" className="w-img"> 
                              <img  src="/assets/img/blog/blog-list-1.jpg" alt="them-pure" />
                           </Link>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta mb-25">
                              <span><a href="#"><i className="fal fa-user"></i>Tushar</a></span>
                              <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              <span><a href="#"><i className="fal fa-calendar-alt"></i> July 21, 2020</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <Link href="/blog-details">Service Construct deals physical damage with his
                                 basic attack in the match.</Link>
                           </h3>
                           <div className="postbox__text">
                              <p>Novia's spaciously two bedroom apartments are perfect for families and even business
                                 partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                           </div>

                           <div className="read-more-wrapper">
                              <a href="#" className="postbox__read-more-btn tp-btn-hover">
                                 Read More
                                 <b></b>
                              </a>
                           </div>


                        </div>
                     </article>


                     <article className="postbox__item format-video mb-30 transition-3">
                        <div className="postbox__thumb p-relative">
                           <Link href="/blog-details" className="w-img"> 
                              <img src="/assets/img/blog/blog-list-2.jpg" alt="them-pure" />
                           </Link>
                           <div className="postbox__video">
                              <span> <i className="fas fa-play" style={{cursor: "pointer"}} onClick={()=> setIsVideoOpen(true)}></i> </span>
                           </div>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta mb-25">
                              <span><a href="#"><i className="fal fa-user"></i>Tushar</a></span>
                              <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              <span><a href="#"><i className="fal fa-calendar-alt"></i> July 21, 2020</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <Link href="/blog-details">But he is able to grab the front-most hero, truely
                                 paralyzing and dealing </Link>
                           </h3>
                           <div className="postbox__text">
                              <p>Novia's spaciously two bedroom apartments are perfect for families and even business
                                 partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                           </div>

                           <div className="read-more-wrapper">
                              <a href="#" className="postbox__read-more-btn tp-btn-hover">
                                 Read More
                                 <b></b>
                              </a>
                           </div>


                        </div>
                     </article>


                     <article className="postbox__item format-silder mb-30 transition-3">
                        <div className="postbox__thumb p-relative">
                           <Link href="/blog-details" className="w-img"> 
                              <img src="/assets/img/blog/blog-list-3.jpg" alt="them-pure" />
                           </Link>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta mb-25">
                              <span><a href="#"><i className="fal fa-user"></i>Tushar</a></span>
                              <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              <span><a href="#"><i className="fal fa-calendar-alt"></i> July 21, 2020</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <Link href="/blog-details">Pure damage for a duration. This ability is the only
                                 interruptable by stuns</Link>
                           </h3>
                           <div className="postbox__text">
                              <p>Novia's spaciously two bedroom apartments are perfect for families and even business
                                 partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                           </div>

                           <div className="read-more-wrapper">
                              <a href="#" className="postbox__read-more-btn tp-btn-hover">Read More <span></span>
                                 <b></b>
                              </a>
                           </div>


                        </div>
                     </article>

                     <article className="postbox__item format-audio mb-30 transition-3">
                        <div className="postbox__thumb p-relative">
                           <Link href="/blog-details" className="w-img"> 
                              <img src="/assets/img/blog/blog-list-4.jpg" alt="them-pure" />
                           </Link>
                           <div className="postbox__audio">
                              <a href="#">
                                 <img src="/assets/img/blog/soundclould-logo.png" alt="them-pure" />
                              </a>
                           </div>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta mb-25">
                              <span><a href="#"><i className="fal fa-user"></i>Tushar</a></span>
                              <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              <span><a href="#"><i className="fal fa-calendar-alt"></i> July 21, 2020</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <Link href="/blog-details">If any construction company wishes to commence
                                 its business in Bangladesh. </Link>
                           </h3>
                           <div className="postbox__text">
                              <p>Novia's spaciously two bedroom apartments are perfect for families and even business
                                 partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                           </div>

                           <div className="read-more-wrapper">
                              <a href="#" className="postbox__read-more-btn tp-btn-hover">
                                 Read More
                                 <b></b>
                              </a>
                           </div>


                        </div>
                     </article>

                     <article className="postbox__item format-stander mb-30 transition-3">
                        <div className="postbox__content">
                           <div className="postbox__meta mb-25">
                              <span><a href="#"><i className="fal fa-user"></i>Tushar</a></span>
                              <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                              <span><a href="#"><i className="fal fa-calendar-alt"></i> July 21, 2020</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <Link href="/blog-details">Then they need to establish a company branch
                                 office/partnership with anyone.</Link>
                           </h3>
                           <div className="postbox__text">
                              <p>Novia's spaciously two bedroom apartments are perfect for families and even business
                                 partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                           </div>

                           <div className="read-more-wrapper">
                              <a href="#" className="postbox__read-more-btn tp-btn-hover">
                                 Read More
                                 <b></b>
                              </a>
                           </div>


                        </div>
                     </article>


                     <div className="basic-pagination">
                        <nav>
                           <ul>
                              <li>
                                 <a href="#">
                                    <i className="fal fa-angle-double-left"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="#">1</a>
                              </li>
                              <li>
                                 <span className="current">2</span>
                              </li>
                              <li>
                                 <a href="#">3</a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fal fa-angle-double-right"></i>
                                 </a>
                              </li>
                           </ul>
                        </nav>
                     </div>


                  </div>
               </div>



               {/* right site */}
               <div className="col-xxl-3 col-xl-3 col-lg-4 col-12">
                  <div className="sidebar__wrapper">

                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">About Me</h3>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__about text-center">
                              <div className="sidebar__about-img">
                                 <img src="/assets/img/about/sidebar-about-me.jpg" alt="them-pure" />
                              </div>
                              <h3 className="sidebar__about-name">Alonso D. Dowson</h3>
                              <p>Lorem ipsum dolor sit amet, consect <br /> etur adipisicing elit, sed do eiusmod <br />
                                 tempor
                                 incididunt ut labore.</p>
                              <div className="sidebar__about-social">
                                 <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                 <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                 <span><a href="#"><i className="fab fa-behance"></i></a></span>
                                 <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                                 <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <SidebarSearch /> 
                     <PopularFeeds /> 
                     <Category /> 
                     <Tags />
                  </div>
                  
                  <div className="sidebar__banner p-relative">
                     <h4 className="mb-30">Add Banner</h4>
                     <div className="sidebar__banner-content">
                        <img src="/assets/img/promotion/ads.jpg" alt="them-pure" />
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
        videoId={"gmB_TC92I8w"}
      />
      {/* video modal end */}
        </>
    );
};

export default BlogListArea;