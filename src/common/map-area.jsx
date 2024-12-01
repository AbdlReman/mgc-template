import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13275.350652857593!2d73.0633068!3d33.7131493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfc4d6e85d3d%3A0x9354aafce8605d7!2sMaidaan%20Head%20Office!5e0!3m2!1sen!2s!4v1732525575577!5m2!1sen!2s"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-img">
          <img src="/assets/img/cta/contact-map-logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
