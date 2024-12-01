import SocialLinks from '@/src/common/social-links';
import CommonFooter, { FooterCopyRight } from './common-footer';

const footer_links = [
  {
    id: 1,
    title: "pages",
    col: "col-xl-3",
    id: "company",
    links: [
      { title: "About", link: "/about" },
      { title: "Home", link: "/" },
      { title: "News & Feeds", link: "/blog" },
      { title: "Get In Touch", link: "/contact" },
   
    ],
  },
];

const footer_content = {
  footer_logo: "/assets/img/logo/black-logo.png",
  about: "About Us",
  about_des: (
    <>
      Your goals are individual. We believe business advice should be too, so
      we have to help your business thrive in this work environment situation.
    </>
  ),
  phone_icon: "/assets/img/footer/call-icon.png",
  address: "Phone",
  phone: "(+92) 304-111-3309",
  email_icon: "/assets/img/footer/message-rgb-ison.png",
  email: "info@maidaangroup.com",
};

const { footer_logo, about, about_des, phone_icon, address, phone, email_icon, email } = footer_content;

const Footer = ({ tp_border }) => {
  return (
    <>
      <footer>
        <div className={`bs-footer ${tp_border && "tp-border-top"}`}>
          <div className="container">
            <div className="bs-footer__top fotter-btn-bottom pt-100 pb-40 d-none d-md-block">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="bs-footer__top-logo">
                    <a href="#">
                      <img src={footer_logo} alt="brand-logo" />
                    </a>
                  </div>
                </div>
                <div className="col-6 text-md-end">
                  <div className="bs-footer__top-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
            <div className="bs-footer__main pb-10 pt-80 tp-border-bottom">
              <div className="row justify-content-center">
                {/* About Section */}
                <div className="col-xl-3 col-md-6">
                  <div className="tp-footer__widget mb-40">
                    <h3 className="tp-footer__widget-title mb-35">{about}</h3>
                    <p className="pr-40">{about_des}</p>
                  </div>
                  {/* <div className="tp-footer-cta d-flex align-items-center">
                    <span className="call-icon">
                      <img src={phone_icon} alt="" />
                    </span>
                    <span>
                      <span className="d-block mb-0">{address}</span>
                      <b>
                        <a href={`callto:${phone}`}> Call Us: {phone}</a>
                      </b>
                    </span>
                  </div> */}
                </div>
                {/* Company Links Section */}
                <div className="col-xl-2 col-md-6">
                  <div className="tp-footer__widget mb-40">
                    <h3 className="tp-footer__widget-title mb-35">
                      {footer_links[0].title}
                    </h3>
                    <ul>
                      {footer_links[0].links.map((item, index) => (
                        <li key={index}>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Get In Touch Section */}
                <div className="col-xl-3 col-md-6">
                  <div className="tp-footer__widget mb-40">
                    <h3 className="tp-footer__widget-title mb-35">Get In Touch</h3>
                    <div className="tp-footer-cta d-flex align-items-center mb-30">
                      <span className="call-icon">
                        <img src="/assets/img/footer/footer-rbg-call.png" alt="" />
                      </span>
                      <span>
                        <span className="d-block mb-0">{address}</span>
                        <b>
                          <a href={`callto:${phone}`}> Call Us: {phone} </a>
                        </b>
                      </span>
                    </div>
                    <div className="tp-footer-cta d-flex align-items-center mb-30">
                      <span className="call-icon">
                        <img src={email_icon} alt="" />
                      </span>
                      <span>
                        <span className="d-block mb-0">Email</span>
                        <b>
                          <a href={`mailto:${email}`}> {email} </a>
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6"> 
                    <div className="tp-footer__widget bs-pl-60 mb-40">
                      <h3 className="tp-footer__widget-title mb-35">
                        Subscribe Now
                      </h3>
                      <p>Subscribe to get the latest news from us</p>

                      <div className="tp-footer-from p-relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <span>
                            <i className="fas fa-envelope-open"></i>
                          </span>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">
                            <i className="fas fa-paper-plane"></i> <b></b>
                          </button>
                        </form>
                      </div>
                      <p className="tp-form-note p-0 mt-5 mb-30">
                        
                        <span>**</span>We are not going to save your data
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            {/* Footer Copy Right */}
            <FooterCopyRight />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
