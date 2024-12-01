import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// related_products 
const related_products = [
    {
        id: 1,
        img: "/assets/img/shop/product-1.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 2,
        img: "/assets/img/shop/product-2.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 3,
        img: "/assets/img/shop/product-3.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 4,
        img: "/assets/img/shop/product-4.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 5,
        img: "/assets/img/shop/product-5.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 6,
        img: "/assets/img/shop/product-1.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 7,
        img: "/assets/img/shop/product-2.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 8,
        img: "/assets/img/shop/product-3.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 9,
        img: "/assets/img/shop/product-4.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },
    {
        id: 10,
        img: "/assets/img/shop/product-5.jpg", 
        title: "Apple EarPods with 3.5mm Plug",
        price: "33.00",
    },



]


// setting         
const setting  = {
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesPerView: 4, 
    navigation: {
        nextEl: ".pd-sd-button-next",
        prevEl: ".pd-sd-button-prev",
    },
    breakpoints: {

        '1200': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },


}



const RelatedProducts = () => {

    const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);



    return (
        <>
        <div className="tp-shop-details-product-area grey-bg pt-120 pb-90">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-8 col-12">
                  <div className="section-title-wraper mb-60">
                     <div className="tp-section">
                        <h2 className="tp-section__title mb-10">Related products</h2>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-12">
                  <div className="law-service-navigation d-flex justify-content-lg-end mb-70">
                     <div className="pd-sd-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                     <div className="pd-sd-button-next"><i className="fal fa-long-arrow-right"></i></div>
                  </div>
               </div>
            </div>
            <div className="row">

               <Swiper 
               {...setting} 
               loop={isLoop}
               modules={[Navigation]}   
               className="swiper-container shop-swipper-slider-active">

                    {
                        related_products.map((item, i)  => 
                            <SwiperSlide key={i} className="swiper-slide wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="tp-product mb-40">
                                        <div className="tp-product__img w-img mb-25">
                                            <div className="fix">
                                                <img src={item.img} alt="theme-pure" />
                                            </div>
                                            <div className="tp-product__action">
                                                <span><a href="#"><i className="fal fa-heart"></i></a></span>
                                                <span><a href="#"><i className="fal fa-shopping-basket"></i></a></span>
                                                <span><a href="#"><i className="fal fa-search"></i></a></span>
                                            </div>
                                        </div>
                                        <h3 className="tp-product__title"><Link href="/shop-details">{item.title}</Link> </h3>
                                        <span className="tp-product__price">£{item.price}</span>
                                        </div>
                            </SwiperSlide>
                        
                        )
                    }
               </Swiper>
            </div>
         </div>
      </div>
    </>
    );
};

export default RelatedProducts;