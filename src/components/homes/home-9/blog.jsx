import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="tp-app-blog ha-blog pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wraper">
                            <div className="tp-section text-center">
                                <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp">News</span>

                                <h2 className="tp-section__title mb-45 wow tpfadeUp" data-wow-delay=".3s">Blog &amp; Insights</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {
                        our_blog_data.slice(19, 23).map((item, i)  => 
                        <div key={i} className="col-xxl-3 col-xl-4 col-lg-6">
                        <div className="it-blog app-blog mb-30 wow tpfadeUp" data-wow-delay={item.delay}>
                            <div className="it-blog__thumb w-img">
                                <div className="fix">
                                    <img src={item.img} alt="theme-pure" />
                                </div>
                            </div>
                            <div className="it-blog-info app-blog-info white-bg">
                                <div className="it-blog__meta">
                                    <span><a href="#"><b className="it-blog-cta">{item.category}</b></a></span>
                                    <span><a href="#"> / By <b> {item.month} {item.date}, {new Date().getFullYear()}</b></a> </span>
                                </div>
                                <h3 className="it-blog__title fz-20 text-mirage"><Link href="/blog-details"> {item.title} </Link></h3>
                                <a href="#" className="blog-btn">Read More
                                    <span className="pl-10">
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                </a>
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