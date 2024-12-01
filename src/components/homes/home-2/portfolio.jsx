import Link from "next/link";

// portfolio_data 
const portfolio_data = [
   {
     id: 1,
     sub_title: "Strategic Locations, Premium Access",
     title: <>Accessible properties in thriving prime neighborhoods</>,
     description: <>Our properties are situated in prime locations that offer easy access to key amenities and infrastructure, ensuring convenience and high value.</>,
     delay: ".3s",
   },
   {
     id: 2,
     sub_title: "Exceptional Design, Modern Living",
     title: <>Properties that blend aesthetics and functionality</>,
     description: <>Our properties feature modern designs that combine beauty and practicality, offering spaces that fit both contemporary needs and cultural values.</>,
     delay: ".4s",
   },
   {
     id: 3,
     sub_title: "Community-Centered Amenities",
     title: <>Spaces designed for growth and shared values</>,
     description: <>Our developments focus on building strong communities, offering shared spaces and green areas to foster connections and well-being.</>,
     delay: ".5s",
   },
 ];
 
 const Portfolio = () => {
   return (
     <>
       <div className="tp-it-portfolio pt-120 pb-120">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <div className="section-title-wraper pb-80">
                 <div className="tp-section text-center">
                   <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                     <i className="before-border"></i>
                     Maidaan Properties <i className="after-border"></i>
                   </span>
                   <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">
                   Your Gateway to Premium Real Estate Opportunities
                   </h2>
                   <p className="wow tpfadeUp" data-wow-delay=".4s">
                   At Maidaan Properties, our mission is to streamline the real estate process, making it accessible, transparent, and efficient for all.
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div className="row">
             {portfolio_data.map((item, i) => (
               <div key={i} className="col-lg-6 col-xl-4">
                 <div className="tp-porffolio-wrapper mb-30">
                   <div className="it-portfolio-item wow tpfadeUp" data-wow-delay={item.delay}>
                     <div className="it-portfolio-item__content it-pt-border">
                       <div className="it-portfolio-item__meta">
                         <a href="#" style={{color:"#757c80"}}>{item.sub_title}</a>
                       </div>
                       <h3 className="it-portfolio-item__title">
                         {item.title}
                       </h3>
                       <p className="it-portfolio-item__description">{item.description}</p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           <div className="row">
             <div className="col-12">
               <div className="it-portfolio-btn-wrapper text-center mt-20">
                 {/* <Link href="/portfolio-all" className="tp-border-btn vogue-text-color tp-btn-hover alt-bg-orange">
                   View All Properties
                   <span>
                     <i className="fal fa-long-arrow-right"></i>
                     <i className="fal fa-long-arrow-right"></i>
                   </span>
                   <b></b>
                 </Link> */}
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };
 
 export default Portfolio;
 