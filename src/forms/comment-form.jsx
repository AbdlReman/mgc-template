import React from "react";

const CommentForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input">
              <input type="text" placeholder="Website" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input">
              <textarea placeholder="Enter your comment ..."></textarea>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="tp-comment-btn-wrapper">
              <button type="submit" className="tp-common-btn">
                <span className="mr-10">
                  <i className="fas fa-comments"></i>
                  <i className="fas fa-comments"></i>
                </span>
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
