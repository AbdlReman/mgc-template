import React from 'react';


const service_data = [
    {
        id: 1,
        link: "#",
        title:"About Our Company",
        icon: "fal fa-long-arrow-down",
    },
    {
        id: 2,
        link: "#",
        title:"About Our Company",
        icon: "fal fa-long-arrow-down",
    },
    {
        id: 3,
        link: "#",
        title:"Our Projects",
        icon: "fal fa-long-arrow-down",
    },
    {
        id: 4,
        link: "#",
        title:"Get In Touch",
        icon: "fal fa-long-arrow-down",
    },
]

const ServiceArea = () => {
    return (
        <>
            <div className="ha-service white-bg">
            <div className="container-fluid g-0">
                <div className="row gx-0">
                    {service_data.map((item, i)  => 
                        <div key={i} className="col-xl-3">
                        <a href="#">
                            <div className="ha-service-item d-flex align-items-center justify-content-between">
                                <div className="ha-service__tittle-wapper">
                                    <h3 className="ha-service__title">{item.title}</h3>
                                </div>
                                <div className="ha-service__icon">
                                    <span><i className="fal fa-long-arrow-down"></i></span>
                                </div>
                            </div>
                        </a>
                    </div>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceArea;