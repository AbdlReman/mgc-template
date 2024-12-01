import React from 'react';


const uesr_review_data = [
    {
        id: 1, 
        img: "/assets/img/testimonial/testi-avata-2.png",
        user_name: "Tushar Biswas",
        date_time: "March 27, 2018 9:51 am",
        description: <>This is cardigan is a comfortable warm classic piece. Great
        to layer with a light top and you can dress up or down given the jewel
        buttons. I’m 5’8” 128lbs a 34A and the Small fit fine.</>
    },

    {
        id: 2, 
        img: "/assets/img/testimonial/testi-avata-1.png",
        user_name: "Samrat Islan",
        date_time: "March 27, 2018 9:51 am",
        description: <>This is cardigan is a comfortable warm classic piece. Great
        to layer with a light top and you can dress up or down given the jewel
        buttons. I’m 5’8” 128lbs a 34A and the Small fit fine.</>
    },

    {
        id: 3, 
        img: "/assets/img/testimonial/testi-avata-3.png",
        user_name: "Shuvo Haq",
        date_time: "March 27, 2018 9:51 am",
        description: <>This is cardigan is a comfortable warm classic piece. Great
        to layer with a light top and you can dress up or down given the jewel
        buttons. I’m 5’8” 128lbs a 34A and the Small fit fine.</>
    },
]
const UserReview = () => {
    return (
        <>
             {
                uesr_review_data.map((item, i) =>
            <li key={i}>
                <div className="comments-box d-flex">
                    <div className="comments-avatar mr-10">
                    <img src={item.img} alt={item.user_name} />
                    </div>
                    <div className="comments-text">
                    <div
                    className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                    <div className="avatar-name">
                    <h5>{item.user_name} </h5>
                    <div className="comments-date">
                    <span>{item.date_time}</span>
                    </div>
                    </div>
                    <div className="user-rating">
                    <ul>
                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                    </ul>
                    </div>
                    </div>
                    <p className="m-0"> {item.description}</p>
                    </div>
                </div>
            </li>
                )
             }
        </>
    );
};

export default UserReview;