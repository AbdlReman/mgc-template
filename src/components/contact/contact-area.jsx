import React from "react";

const contact_data = [
 
  {
    id: 2,
    titel: "Inquiries",
    email: "support@maidaangroup.com",
    phone: "(+92) 304-111-3309",
    tel: "(+92) 304-111-3309",
  },
  {
    id: 3,
    titel: "General",
    email: "info@maidaangroup.com",
    phone: "(+92) 304-111-3309",
    tel: "(+92) 304-111-3309",
  },
];

// contact_info
const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Say Hello",
  title: <>At Maidaan Group, we blend creativity with strategy to deliver impactful branding solutions.</>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-120 pb-90 wow tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-img-1 pb-100 w-img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <span className="say-hello">{hi_text}</span>
            </div>
            <div className="col-lg-10">
              <div className="tp-contact-page-info ">
                <h3 className="tp-section__title pb-60 mb-60 tp-border-bottom">
                  {title}
                </h3>
              </div>
              <div className="row">
                {contact_data.map((item, i) => (
                  <div key={i} className="col-lg-5">
                    <div className="contact-cta-item mb-30">
                      <b>{item.titel}</b> <br />
                      <a href={`mailto:${item.email}`}>{item.email}</a> <br />
                      <a href={`tel:${item.tel}`}>{item.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
