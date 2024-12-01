import ApplyForm from '@/src/forms/apply-form';
import React from 'react';


const job_details_content = {
    job_about: "About Jobs",
    job_description: <>At Gencio, we are building preventive, continuous and personalized primary
                        healthcare that is made affordable and scalable by machine
                        learning. Our ambition is to transform healthcare by building trustworthy products designed
                        for both people and healthcare professionals. Our
                        journey has just started, and we’re currently focusing on women’s health… Come join us! <br />

                        <br />

                        As a Product Designer, you will be involved in every aspect of our “fast and furious” product
                        development process, from brainstorming & initial
                        concepts to pixels tweaking and refinements based on user feedback. As part of the product
                        team, you will join an experienced team of product
                        leaders and full-stack engineers. This position is full-time and based in Paris. We encourage
                        remote work (1 to 2 weeks from time to time).</>,
    responsibility_title: "Your Responsibility",
    responsibility_list: [
        <>You will partner with product managers to validate opportunities and needs, define requirements, prototype interactions and oversee the design process.</>,
        <>You will own the design of flows and experiences, on both mobile and web, that are simple, elegant and delightful</>,
        <>You will contribute to strategic decisions with the rest of the product and executive teams</>,
        <>You will work closely with Product Managers, Engineers and the whole team to oversee the user experience of a product from ideation to shippings</>,
        <>You will join our growing design team, and help enrich and apply our internal design  systems</>,
    ],
    experience_title: "Experience",
    experience_list: [
        <>You have great communication skills to engage with our multicultural team</>,
        <>You are obsessed over the user experience and UI details, and excited to keep pushing until the experience is useful and elegant</>,
        <>You are comfortable designing UI for both web and mobile, and quick at developing  wireframes and prototyping</>,
        <>You have 3+ years relevant design experience at a product-driven tech company</>,
    ],
    include_title: "Please include these materials in your application:",
    include_files: [
        <>A link to your online portfolio</>,
        <>Your CV or LinkedIn profile</>,
        <>A few words describing why you want to join Gencio</>,
    ],


}
const {
    job_about,
    job_description,
    responsibility_title,
    responsibility_list,
    experience_title,
    experience_list,
    include_title,
    include_files
}  = job_details_content



const JobDetailsArea = () => {
    return (
        <>
            <div className="tp-job-details pt-120">
         <div className="container">
            <div className="tp-job-details-box pt-80 pb-80">
               <div className="row justify-content-center">
                  <div className="col-lg-10">
                     <div className="tp-inner-pt-section wow tpfadeUp">
                        <h4 className="tp-inner-pt-section__title mb-30">{job_about}</h4>
                        <p className="mb-30">
                            {job_description}
                        </p>
                        <h4 className="tp-inner-pt-section__title mb-30">{responsibility_title}</h4>

                        <div className="tp-inner-pg-list mb-50">
                           <ul>
                            { responsibility_list.map((item, i) => 
                                <li key={i}>{item}</li>
                                )
                            }
                             
                           </ul>
                        </div>

                        <h4 className="tp-inner-pt-section__title mb-30">{experience_title}</h4>
                        <div className="tp-inner-pg-list mb-50">
                           <ul>
                            {
                                experience_list.map((item, i)  => 
                                <li key={i}>{item}</li>
                                )
                            } 
                           </ul>
                        </div>
                        <h5 className="mb-30">{include_title}</h5>
                        <div className="tp-inner-pg-list mb-50">
                           <ul>
                            {
                                include_files.map((item, i)  => <li key={i}>{item} </li>)
                            } 
                           </ul>
                        </div>
                        <h4 className="tp-inner-pt-section__title mb-30">Apply for this position</h4>

                        <div className="tp-inner-pg-form wow tpfadeUp" data-wow-delay=".4s">
                           <div className="it-cta-form">
                            <ApplyForm /> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default JobDetailsArea;