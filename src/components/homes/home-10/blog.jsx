import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <>
             <div className="seo-blog-area theme-bg-9 pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wraper mb-80">
                            <div className="tp-section text-center">
                                <h2 className="tp-section__title mb-15 seagreen-text-color wow tpfadeUp" data-wow-delay=".3s">Blog & Insights</h2>
                                <p>Search Engine & Social Media Optimization Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {our_blog_data.slice(23, 26).map((item, i) =>
                        <div key={i} className="col-xl-4 col-lg-6 wow tpfadeUp" data-wow-delay=".4s">
                        <div className="it-blog seo-blog mb-30  aos-animate" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="it-blog__thumb w-img">
                                <div className="fix">
                                    <img src={item.img} alt="theme-pure" />
                                </div>
                                <div className="it-blog-date">
                                    <span><b>{item.date}</b> {item.month}</span>
                                </div>
                            </div>
                            <div className="it-blog-info white-bg">
                                <div className="it-blog__meta">
                                    <span><a href="#"><b className="it-blog-cta">{item.category}</b></a></span>
                                    <span><a href="#"> / By <b> {item.post_by}</b></a> </span>
                                </div>
                                <h3 className="it-blog__title mb-50"><Link href="/blog-details"> {item.title}</Link></h3>
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
            </div>
        </div>
        </>
    );
};

export default Blog;