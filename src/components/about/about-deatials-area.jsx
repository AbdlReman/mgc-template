import React from 'react';

const about_details_content = {
    title: <>Why Choose Maidaan Group?</>,

    expertise_title: <>Expertise</>,
    expertise_content: <>With years of experience in real estate development, construction, and marketing, Maidaan Group is a trusted partner for individuals, businesses, and investors worldwide.</>,

    global_reach_title: <>Global Reach</>,
    global_reach_content: <>Our projects span across key markets in Pakistan, the U.S., and other international locations, providing us with the insight and ability to serve a diverse range of clients.</>,

    solutions_title: <>Comprehensive Solutions</>,
    solutions_content: <>From innovative marketing campaigns and events to world-class residential developments, we offer a wide array of services designed to meet the evolving needs of our clients.</>,

    excellence_title: <>Commitment to Excellence</>,
    excellence_content: <>At Maidaan Group, excellence is not just a goal—it’s our standard. Every project we undertake is built with attention to detail and a focus on delivering exceptional results.</>,
};

const {
    title,
    expertise_title,
    expertise_content,
    global_reach_title,
    global_reach_content,
    solutions_title,
    solutions_content,
    excellence_title,
    excellence_content,
} = about_details_content;

const AboutDetailsArea = () => {
    return (
        <>
            <div className="tp-about-deatials-service theme-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 wow tpfadeUp">
                            <div className="tp-about-sv-content">
                                <h3 className="tp-section__title wow tpfadeUp mb-50">{title}</h3>
                            </div>
                            <div className="tp-ab-sv-tabs mb-30">
                                <ul className="nav nav-pills mb-30" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            tabIndex="-1"
                                            className="nav-link active"
                                            id="expertise-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-expertise"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-expertise"
                                            aria-selected="true"
                                        >
                                            Expertise
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            tabIndex="-1"
                                            className="nav-link"
                                            id="global-reach-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-global-reach"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-global-reach"
                                            aria-selected="false"
                                        >
                                            Global Reach
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            tabIndex="-1"
                                            className="nav-link"
                                            id="solutions-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-solutions"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-solutions"
                                            aria-selected="false"
                                        >
                                            Solutions
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            tabIndex="-1"
                                            className="nav-link"
                                            id="excellence-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-excellence"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-excellence"
                                            aria-selected="false"
                                        >
                                           Commitment
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-expertise" role="tabpanel" aria-labelledby="expertise-tab">
                                        <div className="tp-ab-sv-tabs-content">
                                            <h3 className="tp-ab-sv-tabs-title">{expertise_title}</h3>
                                            <p>{expertise_content}</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-global-reach" role="tabpanel" aria-labelledby="global-reach-tab">
                                        <div className="tp-ab-sv-tabs-content">
                                            <h3 className="tp-ab-sv-tabs-title">{global_reach_title}</h3>
                                            <p>{global_reach_content}</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-solutions" role="tabpanel" aria-labelledby="solutions-tab">
                                        <div className="tp-ab-sv-tabs-content">
                                            <h3 className="tp-ab-sv-tabs-title">{solutions_title}</h3>
                                            <p>{solutions_content}</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-excellence" role="tabpanel" aria-labelledby="excellence-tab">
                                        <div className="tp-ab-sv-tabs-content">
                                            <h3 className="tp-ab-sv-tabs-title">{excellence_title}</h3>
                                            <p>{excellence_content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="tp-sv-tabs-btn-wrapper mb-30">
                                <a href="#" className="tp-white-btn">
                                    Learn More
                                    <span className="ml-10">
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                </a>
                            </div> */}
                        </div>
                        <div className="col-xl-5 wow tpfadeUp">
                            <div className="about-sv-img">
                                <img src="/assets/img/services/about-service.jpg" alt="Why Choose Maidaan Group" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDetailsArea;
