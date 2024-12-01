import React from 'react';


const privacy_policy_content = {
    date: <>November 21, 2023</>,
    overview: <>Register as a user of our Site and Services, we ask for personal information
                that will be used to activate your account, provide the Services to you, communicate
                with you about the status of your account, and for other purposes set out in this Privacy
                Policy. Your name, company name, address, telephone number, email
                address, credit card information and certain other information about you may be required by
                us to provide the Services or be disclosed by you during your use of
                the Services. You will also be asked to create a user name and private password, which will
                become part of your account information.<br />
                <br />
                By providing personal information to us and by retaining us to provide you with the Services,
                you voluntarily consent to the collection, use and disclosure of such
                personal information as specified in this Privacy Policy. The legal bases for our processing
                of personal information are primarily that the processing is necessary for
                providing the Services and that the processing is carried out in our legitimate interests,
                which are further explained below. Without limiting the foregoing, we may
                on occasion ask you to consent when we collect, use, or disclose your personal information in
                specific circumstances. Amendments to this Privacy Policy will be
                posted to the Site and/or Services and will be effective when posted. Your continued use of
                the Site and/or Services following the posting of any amendment to this
                Privacy Policy shall constitute your acceptance of such amendment.</>,

    information_title: <>Information we collect</>,
    information_des: <>Our Site collects information that identifies, relates to, describes, references, is capable
                        of being associated with, or could reasonably be linked to, directly or
                        indirectly, with a particular consumer or device (“personal information”). The information
                        may be provided through the following sources:</>,
    information_list : [
        <>directly by you;</>,
        <>by your internet service provider;</>,
        <>You will contribute to strategic decisions with the rest of the product and executive teams</>,
        <>ad networks;</>,
        <>analytics providers; and</>,
        <>operating systems and platforms</>,
    ],
    sm_title1 : <>In particular, our Site has collected the following categories of personal information from its consumers within in the last 12 months:</>,
    sm_des : <>We may also use your personal information to generate Aggregated Data for internal use and
                for sharing with others on a selective basis. “Aggregated Data” means
                records which have been stripped of information potentially identifying users, and which have
                been manipulated or combined to provide generalized, anonymous
                information. Your identity and personal information will be kept anonymous in Aggregated
                Data.</>,
    sm_title2 : <>Sharing your personal information</>,
    sm_des2 : <>Our Site collects information that identifies, relates to, describes,
                references, is capable of being associated with, or could reasonably be linked to, directly
                or
                indirectly, with a particular consumer or device (“personal information”). The information
                may be provided through the following sources:</>,

    sm_list : [
        <>Service providers such as Stripe and Paypal who will utilize your credit card and
            other payment information in accordance with their respective privacy policies.</>,
        <>Dribbble’s registered API application providers, including Chrome tab extensions Panda
            and Muz.li which deliver relevant design stories and inspiration. We
            invite you to review their applicable data protection policies.</>,
        <>Dribbble’s related, subsidiary, and affiliate companies.</>,
    ]

    


}

const {date, overview, information_title, information_des, information_list, sm_title1, sm_des, sm_title2,sm_des2, sm_list}  = privacy_policy_content




const PrivacyPolicyArea = () => {
    return (
      <>
        <div className="tp-job-details pt-120 pb-60 wow tpfadeUp">
          <div className="container">
            <div className="tp-privacy-policy-box">
              <div className="tp-inner-page-hero mb-60 pb-20 tp-border-bottom">
                <span>
                  <b>Updated:</b>
                  {date}
                </span>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="tp-inner-pt-section">
                    <h4 className="tp-inner-pt-section__title mb-30">
                      Overview
                    </h4>
                    <p className="mb-40">{overview}</p>
                    <h4 className="tp-inner-pt-section__title mb-30">
                      {information_title}
                    </h4>
                    <p className="mb-40">{information_des}</p>

                    <div className="tp-inner-pg-list mb-50">
                      <ul>
                        {information_list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <h4 className="tp-inner-pt-section__sm-title mb-30">
                      {sm_title1}
                    </h4>
                    <p>{sm_des}</p>
                    <br />

                    <h5 className="mb-30">{sm_title2}</h5>
                    <p className="mb-40">{sm_des2}</p>
                    <div className="tp-inner-pg-list mb-50">
                      <ul>
                        {sm_list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
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

export default PrivacyPolicyArea;