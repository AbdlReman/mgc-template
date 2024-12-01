import faq_data from '@/src/data/faq-data';
import React from 'react';

const FaqArea = () => {
    return (
        <>
            <div className="seo-faq-area sv-fea-area pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 wow tpfadeUp">
                  <div className="seo-faq-cotent mb-30">
                     <div className="accordion tp-accordion" id="accordionExample">
                        

                     {faq_data.slice(0, 5).map((item, i) => (
                            <div key={i} className="accordion-item">
                            <h2 className="accordion-header" id={item.accordion_id}>
                                <button
                                className={`accordion-button ${item.collapsed}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={item.data_bs_target}
                                aria-expanded={item.aria_expanded}
                                aria-controls={item.aria_controls}
                                >
                                {item.question}
                                </button>
                            </h2>
                            <div
                                id={item.aria_controls}
                                className={`accordion-collapse collapse ${item.show}`}
                                aria-labelledby={item.accordion_id}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                            </div>
                        ))}

                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow tpfadeUp">
                  <div className="seo-faq-cotent mb-30">
                     <div className="accordion tp-accordion" id="accordionExample1">


                     {faq_data.slice(5, 11).map((item, i) => (
                            <div key={i} className="accordion-item">
                            <h2 className="accordion-header" id={item.accordion_id}>
                                <button
                                className={`accordion-button ${item.collapsed}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={item.data_bs_target}
                                aria-expanded={item.aria_expanded}
                                aria-controls={item.aria_controls}
                                >
                                {item.question}
                                </button>
                            </h2>
                            <div
                                id={item.aria_controls}
                                className={`accordion-collapse collapse ${item.show}`}
                                aria-labelledby={item.accordion_id}
                                data-bs-parent="#accordionExample1"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                            </div>
                        ))}

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default FaqArea;