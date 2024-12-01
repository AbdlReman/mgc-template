import SendSmsForm from "@/src/forms/send-sms-form";
import React from "react";

const contact_content = {
  title: "Project On Your Mind. Let Us...",
  phone: "+123 488 9652",
  email: "info@gencio-itsolutions.com",
  address: "25 West 21th Street, Miami FL, US",
  date: "Mon-Fri: 10:00 - 18:0",
};

const { title, phone, email, address, date } = contact_content;

const ContactHomeSeven = ({style_from_pric}) => {
  return (
    <>
      <div className={`it-cta-area law-cta-area ${style_from_pric && "price-cta-form "} pt-120 pb-85 theme-bg-6`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="mb-30">
                <div className="it-cta__title">
                  <div className="section-title-wraper">
                    <div className="tp-section">
                      <h2
                        className="tp-section__title mb-45 wow tpfadeUp"
                        data-wow-delay=".3s"
                      >
                        {title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="it-cta__info wow tpfadeUp" data-wow-delay=".4s">
                  <span>
                    <i className="fas fa-phone"></i>
                    <a href={`tel: ${phone}`}>{phone}</a>
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                    {address}
                  </span>
                  <span>
                    <i className="fas fa-envelope-open"></i>
                    <a href={`mailto: ${email}`}>{email}</a>
                  </span>
                  <span>
                    <i className="fas fa-clock"></i>
                    {date}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow tpfadeUp" data-wow-delay=".5s">
              <div className="it-cta-form law-cta-form">
                <SendSmsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHomeSeven;
