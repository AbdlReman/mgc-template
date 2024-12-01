import React from 'react';

const AddReviewForm = () => {
    return (
        <>
        <form  onSubmit={(e) => e.preventDefault()}>
        <div className="row">
        <div className="col-xxl-12">
        <div className="comment-input">
        <textarea placeholder="Your review..."></textarea>
        </div>
        </div>
        <div className="col-xxl-6">
        <div className="comment-input">
        <input type="text" placeholder="Your Name*" />
        </div>
        </div>
        <div className="col-xxl-6">
        <div className="comment-input">
        <input type="email" placeholder="Your Email*" />
        </div>
        </div>
        <div className="col-xxl-12">
        <div className="tp-comment-submit">
        <button type="submit" className="tp-btn">Submit</button>
        </div>
        </div>
        </div>
        </form>
        </>
    );
};

export default AddReviewForm;