import React from 'react';


// help_content 
const help_info = [
    {
        id: 1,
        icon: "flaticon-hacker",
        title: "Account settings",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 2,
        icon: "flaticon-settings",
        title: "Login & password",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 3,
        icon: "flaticon-secure",
        title: "Privacy & security",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 4,
        icon: "flaticon-store",
        title: "Marketplace",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 5,
        icon: "flaticon-clipboard",
        title: "Price & plans",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },
    {
        id: 6,
        icon: "flaticon-globe",
        title: "Get in touch",
        des: <>Our typical customer doesn’t want to be distracted by IT Services.</>,
    },


]


const help_content = {}
const {}  = help_content


const HelpArea = () => {
    return (
      <>
        <div className="tp-help-card-area pb-90">
          <div className="container">
            <div className="row">
              {help_info.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="tp-help-item wow tpfadeUp text-center">
                    <div className="tp-help-item__icon">
                      <span>
                        <i className={`${item.icon}`}></i>
                      </span>
                    </div>
                    <h3 className="tp-help-item__title mb-15">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))} 

              
            </div>
          </div>
        </div>
      </>
    );
};

export default HelpArea;