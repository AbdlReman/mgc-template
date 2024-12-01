import React from "react";

const HelpSearch = () => {
  return (
    <>
      <div className="tp-help-page-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <span className="tp-help-form-text">
                <b>How can we help you?</b>
              </span>
            </div>
            <div className="col-lg-9">
              <form onSubmit={(e)  => e.preventDefault()}>
                <div className="tp-help-search p-relative">
                  <input type="text" placeholder="keyword" />
                  <div className="tp-help-search-form-icon">
                    <span>
                      <i className="fal fa-search"></i>
                    </span>
                  </div>
                  <div className="tp-help-form-btn">
                    <button className="help-search-btn tp-btn" type="submit">
                      Search Now
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
};

export default HelpSearch;
