import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
return (
<>
<div className="tp-app-blog pt-120 pb-90">
<div className="container">
<div className="row">
<div className="col-12">
<div className="section-title-wraper">
<div className="tp-section text-center">
<span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp" data-wow-delay=".3s">
<i className="far fa-circle"></i>
News
<i className="far fa-circle"></i>
</span>
<h2 className="tp-section__title mb-75 text-mirage wow tpfadeUp" data-wow-delay=".5s">Blog & Insights</h2>
</div>
</div>
</div>
</div>
<div className="row">
{
our_blog_data.slice(6, 10).map((item, i )  => 

<div key={i} className="col-xl-3 col-lg-6">
<div className="it-blog app-blog mb-30 wow tpfadeUp" data-wow-delay=".5s">
<div className="it-blog__thumb w-img">
<div className="fix">
<img src={item.img} alt="" />
</div>
</div>
<div className="it-blog-info app-blog-info white-bg">
<div className="it-blog__meta">
<span><a href="#"><b className="it-blog-cta">{item.category}</b></a></span>
<span><a href="#"> / By <b> {item.post_by}</b></a> </span>
</div>
<h3 className="it-blog__title fz-20 text-mirage"><Link href="/blog-details"> 
{item.title}
there </Link></h3>
<Link href="/blog-details" className="blog-btn">Read More
<span className="pl-10">
<i className="fal fa-long-arrow-right"></i>
</span>
</Link>
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