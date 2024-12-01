import React from 'react';
import Tilt from 'react-parallax-tilt';


const portfolio_data =[
    {
        id: 1,
        title: "Eco Dominson App",
        hover_img: "/assets/img/portfolio/mp-pt-img.jpg",
        cls: "mp-portfolio-btn",
    },
    {
        id: 2,
        title: "MicDrop Agency Website",
        hover_img: "/assets/img/portfolio/mp-pt-img-2.jpg",
        cls: "mp-portfolio-btn",
    },
    {
        id: 3,
        title: "Atypikal Crypto",
        hover_img: "/assets/img/portfolio/mp-pt-img-3.jpg",
        cls: "mp-portfolio-tag",
    },
    {
        id: 4,
        title: "Gionix NFT Marketplace",
        hover_img: "/assets/img/portfolio/mp-pt-img-4.jpg",
        cls: "mp-portfolio-tag",
    },
]

const Portfolio = () => {
    return (
        <>
            <div className="mp-portfolio pb-120 fix">
            <div className="container">
                <span className="mp-portfolio-area-title wow tpfadeUp">Recent Works</span>

                {portfolio_data.map((item, i)  => 
                    <div key={i} className="mp-portfolio-item d-flex justify-content-between align-items-center p-relative">
                    <div className="mp-portfolio-info wow tpfadeUp wow tpfadeUp">
                        <h3 className="mp-portfolio-title"><a href="#"></a>{item.title}</h3>
                        <div className="mp-portfoio-img p-relative" data-tilt="" data-tilt-perspective="2000">
                        <Tilt
                            className="tilt-img"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900} 
                            transitionSpeed={1000}
                            gyroscope={true}
                            >
                            <img src={item.hover_img} alt={item.title} />
                            <a href="#" className="mp-pt-btn"><i className="fal fa-long-arrow-right"></i></a>
                            </Tilt>
                        </div>
                    </div>
                    <div className={`${item.cls} wow tpfadeUp`}>
                        <span><a href="#">Interaction</a></span>
                        <span>,</span>
                        <span><a href="#">App Design</a></span>
                    </div>
                </div>
                    )
                }
                <div className="mp-pt-btn-wrapper text-center pt-60 wow tpfadeUp">
                    <a href="#"
                        className="tp-border-btn br-btn-bg-dark border-radious-none tp-btn-hover alt-black-color">More Works
                        <span className="ml-10">
                            <i className="fal fa-long-arrow-right"></i>
                            <i className="fal fa-long-arrow-right"></i>
                        </span>
                        <b></b>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Portfolio;