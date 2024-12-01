import CallToActionForm from "@/src/forms/call-to-action-form";
import React from "react";

const call_to_action_data = {
  action: "Contact",
  title: "Any Project On Your Mind. Let Us Know.",
  phone: "+92 304 111 3309",
  address: " Blue Area Islamabad",
  email: "info@maidaan.com",
  date: "Mon-Fri: 09:00 - 18:0",
};

const { action, title, phone, address, email, date } = call_to_action_data;
const CallToAction = () => {
  return (
    <>
      <div className="it-cta-area pb-115">
        <div className="container">
          <div className="tp-border-top pt-120"></div>
          <div className="row">
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".3s">
              <div className="it-cta__title">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span className="tp-section__subtitle vogue-text-color white-bg mb-15">
                      <i className="before-border"></i>
                      {action}
                    </span>
                    <h2 className="tp-section__title  mb-45">{title}</h2>
                  </div>
                </div>
              </div>
              <div className="it-cta__info">
                <span>
                  <i className="fas fa-phone"></i>
                  <a href={`tel:${phone}`}>{phone}</a>
                </span>
                <span>
                  <i className="fas fa-map-marker-alt"></i> {address}
                </span>
                <span>
                  <i className="fas fa-envelope-open"></i>
                  <a href={email}>{email}</a>
                </span>
                <span>
                  <i className="fas fa-clock"></i> {date}
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="it-cta-form wow tpfadeUp" data-wow-delay=".4s">
                <CallToActionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
