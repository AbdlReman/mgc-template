import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
    return (
        <>
           <div className="tp-lasted-blog-grid pt-120 pb-60">
         <div className="container">
            <div className="row">
                {our_blog_data.slice(26, 38).map((item, i)  => 
                    <div key={i} className="col-xl-4 col-lg-6">
                  <div className="it-blog tp-lasted-blog mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                     <div className="it-blog__thumb w-img">
                        <div className="fix">
                           <img src={item.img} alt="them-pure" />
                        </div>
                        <div className="it-blog-date">
                           <span><b>{item.date}</b> {item.month}</span>
                        </div>
                     </div>
                     <div className="it-blog-info white-bg">
                        <div className="it-blog__meta">
                           <span><a href="#"><b className="it-blog-cta">{item.category}</b></a></span>
                           <span><a href="#"> / By <b> {item.category}</b></a> </span>
                        </div>
                        <h3 className="it-blog__title mb-50"><Link href="/blog-details">{item.title}</Link></h3>
                        <div className="tp-seo-full-btn">
                           <a href="#" className="it-portfolio-item__btn"> Read More
                              <span className="mt-5">
                                 <i className="fal fa-long-arrow-right"></i>
                                 <i className="fal fa-long-arrow-right"></i>
                              </span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
                    
                    )
                }                

            </div>

            <div className="basic-pagination mb-60">
               <nav>
                  <ul>
                     <li>
                        <a href="#"> <i className="fal fa-angle-double-left"></i> </a>
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
                        <a href="#"> <i className="fal fa-angle-double-right"></i> </a>
                     </li>
                  </ul>
               </nav>
            </div>

         </div>
      </div> 
        </>
    );
};

export default BlogArea;