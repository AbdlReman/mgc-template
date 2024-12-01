import team_data from "@/src/data/team-data";
import Link from "next/link";
import React from "react";


const team_content = {
    title: "Our Team",
    st_title: <>Our <span>Team</span> </>,
    btn: "Our Team",
    bg_img: "/assets/img/team/da-deam-info-bg.png"

}
const { title, st_title, btn } = team_content;


const OurTeam = () => {
  
  return (
    <>
      <div className="da-team-area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-title-wraper mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp">
                    {title}
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    {st_title}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="da-team-btn-wrapper text-md-end mb-60 wow tpfadeUp">
                <Link href="/team" className="tp-border-btn br-btn-bg-dark">
                  {btn}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {team_data.slice(0, 3).map((member, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="da-team p-relative mb-30 wow tpfadeUp"
                  data-wow-delay={member.delay}
                >
                  <div className="da-team-img w-img fix">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div
                    className="da-team-info"
                    style={{
                      backgroundImage: `url(/assets/img/team/da-deam-info-bg.png)`,
                    }}
                  >
                    <span>{member.title}</span>
                    <h3 className="da-team-name">
                      <Link href="/team-2">{member.name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
