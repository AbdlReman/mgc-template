import React from 'react';

const terms_conditions_content = {
    updated: <>November 21, 2022</>,
    des: <>This Terms of Service (the “Terms”) describes the rights and responsibilities
            that apply to your use of Dribbble’s websites, services, and mobile app (collectively, the
            “Service”), each owned and operated by Gencio Holdings Ltd. (“Gencio”, “we”, “our” or
            “us”).<br />
            Please read the Terms carefully before using the Service. If you don’t agree to the Terms, as
            well as Dribbble’s Privacy Policy (the “Privacy Policy”) and Gencio’s
            Community Guidelines (the “Community Guidelines”), you may not use the Service. If you are
            entering into the Terms on behalf of a company or other legal entity,
            you represent that you have the authority to bind such entity to the Terms. If you do not
            have such authority, you must not accept the Terms or use the Service on
            behalf of such entity. The Service is only available to you if you have entered the age of
            majority in your jurisdiction of residence and are fully able and competent to
            enter into, abide by and comply with the Terms.</>,

    terms_list : [
        {
            id: "01",
            text: <>Your Gencio Account. If you create an account on the Service (your “Account”), you are
                responsible for maintaining the security of your Account and its
                Content (as defined below), and you are fully responsible for all activities that occur
                under
                your Account and any other actions taken on the Service. You
                must not describe or assign Content to your Account in a misleading or unlawful manner,
                including in a manner intended to trade on the name/ reputation
                of others, and Gencio may change or remove any description or keyword that it considers
                inappropriate or unlawful, or otherwise likely to cause Gencio
                liability. You must immediately notify Gencio of any unauthorized uses of your Account or
                any
                other breaches of security. Gencio will not be liable for
                any acts or omissions by you, including any damages of any kind incurred as a result of
                such
                acts or omissions.</>,
        },
        {
            id: "02",
            text: <>Fees and Renewals. Pricing for Paid Accounts will be provided at the time of purchase.
                    Unless otherwise set out at the time of purchase or as agreed to
                    by Gencio, fees for a Paid Account will be billed in advance for each year and are
                    non-refundable. There will be no refunds or credits for partial months of
                    service or for periods in which your Paid Account remains open but you do not use the
                    Service. <br />
                    <br />
                    We reserve the right to modify our billing rates at any time upon thirty (30) days written
                    notice by posting such fee changes to the Service or through email
                    notification to you. You will be liable to pay such modified billing rates. <br />
                    Subject to your payment of applicable fees for a Paid Account, we will provide the Service
                    to you for the period of time that you have paid for such Service
                    (the “Subscription Period”). At the end of the Subscription Period, your Paid Account
                    subscription will automatically renew for an additional Subscription
                    Period until it is expressly cancelled by you as described in the “Termination” section
                    below. <br /></>,
        },
        {
            id: "03",
            text: <>Fees and Renewals. Pricing for Paid Accounts will be provided at the time of purchase.
                    Unless otherwise set out at the time of purchase or as agreed to
                    by Gencio, fees for a Paid Account will be billed in advance for each year and are
                    non-refundable. There will be no refunds or credits for partial months of
                    service or for periods in which your Paid Account remains open but you do not use the
                    Service. <br />
                    <br />
                    We reserve the right to modify our billing rates at any time upon thirty (30) days written
                    notice by posting such fee changes to the Service or through email
                    notification to you. You will be liable to pay such modified billing rates. <br />
                    Subject to your payment of applicable fees for a Paid Account, we will provide the Service
                    to you for the period of time that you have paid for such Service
                    (the “Subscription Period”). At the end of the Subscription Period, your Paid Account
                    subscription will automatically renew for an additional Subscription
                    Period until it is expressly cancelled by you as described in the “Termination” section
                    below. <br /></>,

        sb_list: [
            <>Service providers such as Stripe and Paypal who will utilize your credit card and
            other payment information in accordance with their respective privacy policies.</>,
            <>Dribbble’s registered API application providers, including Chrome tab extensions
            Panda
            and Muz.li which deliver relevant design stories and inspiration. We
            invite you to review their applicable data protection policies.</>,
            <>Dribbble’s related, subsidiary, and affiliate companies.</>

]


        },
    ],

   

}
const {updated, des, terms_list }  = terms_conditions_content

const TermsArea = () => {
    return (
        <>
            <div className="tp-job-details pt-120 pb-60">
         <div className="container">
            <div className="tp-privacy-policy-box ">
               <div className="tp-inner-page-hero mb-60 pb-20 tp-border-bottom">
                  <span><b>Updated:</b>{updated}</span>
               </div>

               <div className="row justify-content-center wow tpfadeUp">
                  <div className="col-lg-12">
                     <div className="tp-inner-pt-section">
                        <p className="mb-30"> {des} </p> 
                     </div>
                  </div>
               </div>
               <div className="tp-inner-pt-section">

                {terms_list.map((item, i)  => 
                    <div key={i} className="trem-box wow tpfadeUp mb-40">
                     <div className="row">
                        <div className="col-lg-1">
                           <div className="trems-step">
                              <span>{item.id}</span>
                           </div>
                        </div>
                        <div className="col-lg-11">
                           <p>{item.text}</p>

                           {
                            item.sb_list && <div className="tp-inner-pg-list mb-50">
                            <ul>
                                { item.sb_list.map((list, i)  => <li key={i}>{list} </li>)} 
                            </ul>
                         </div>
                           }
                        </div>
                     </div>
                  </div>
                    )
                }
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default TermsArea;