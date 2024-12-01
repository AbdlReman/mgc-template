import React from "react";

const CallToActionForm = ({style_sv_details}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">


          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input type="text" placeholder="Full name" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input type="text" placeholder="Email address" />
            </div>
          </div>
          {
            style_sv_details ? ""  : 
            <>
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <input type="tel" placeholder="Phone" />
              </div>
            </div>        

            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-book"></i>
                </span>
                <select>
                  <option value="#">Selected</option>
                  <option value="#">English</option>
                  <option value="#">Bangla</option>
                  <option value="#">science</option>
                </select>
              </div>
            </div>
            
            </>
          }


          <div className="col-12">
            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit" className="it-cta-form-submit border-0">
              Submit Request
            </button>
          </div>
          

        </div>
      </form>
    </>
  );
};

export default CallToActionForm;
