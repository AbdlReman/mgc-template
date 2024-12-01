import React from 'react';

const mp_cta_content = {
    title: <>Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</>,
    left_text: <>Best UX Design Studio In 2023 <br /> Awwwards Featured 2019 <br /> Decent Awards In Design Category</>
}

const {title, left_text} = mp_cta_content

const MpCtaArea = () => {
    return (
        <>
            <div className="mp-cta-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 wow tpfadeUp">
                        <div className="mp-cta-right">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-12 wow tpfadeUp">
                        <div className="mp-cta-left">
                            <span>Awards</span>
                            <p>
                                {left_text}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 wow tpfadeUp">
                        <a href="#" className="tp-black-bg-btn border-radious-none">contact us
                            <span>
                                <i className="fal fa-long-arrow-right"></i>
                                <i className="fal fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MpCtaArea;