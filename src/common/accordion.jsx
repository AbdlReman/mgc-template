import React from 'react';


// ****** Accordion Data ****** //
const accordion_data = [
  {
      id: 1,
      question: "Project Planning and Execution",
      answer: <>At Victory Construction, we ensure every project is meticulously planned and executed to meet the highest standards of quality and efficiency, turning visions into reality.</>,
      accordion_id: "faq1",
      collapsed: "",
      data_bs_target: "#collapseOne",
      aria_expanded: true,
      aria_controls: "collapseOne",
      show: "show",
  },
  {
      id: 2,
      question: "Design and Build Services",
      answer: <>Our design-build approach combines innovative architectural designs with expert craftsmanship, ensuring seamless delivery from concept to completion.</>,
      accordion_id: "faq2",
      collapsed: "collapsed",
      data_bs_target: "#collapseTwo",
      aria_expanded: false,
      aria_controls: "collapseTwo",
      show: "",
  },
  {
      id: 3,
      question: "Sustainability and Materials",
      answer: <>We prioritize sustainable construction practices, using eco-friendly materials and energy-efficient methods to create spaces that last for generations.</>,
      accordion_id: "faq3",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_expanded: false,
      aria_controls: "collapseThree",
      show: "",
  },
];




const Accordion = () => {
  return (
    <>
      {accordion_data.map((item, i) => (
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
    </>
  );
};

export default Accordion;