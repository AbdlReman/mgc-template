import team_data from "@/src/data/team-data";
import Link from "next/link";
import React from "react";

const TeamArea = () => {
  return (
    <>
      <div className="da-team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {team_data.slice(7, 13).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="da-team wow tpfadeUp  p-relative mb-30">
                  <div className="da-team-img w-img fix">
                    <img src={item.img} alt="theme-pure" />
                  </div>
                  <div
                    className="da-team-info"
                    data-background="assets/img/team/da-deam-info-bg.png"
                    style={{
                      backgroundImage: `url(/assets/img/team/da-deam-info-bg.png)`,
                    }}
                  >
                    <span>{item.title}</span>
                    <h3 className="da-team-name">
                      <Link href="/team-details">{item.name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-istop-btn-wrapper text-center mt-30">
            <a href="#" className="tp-common-btn">
              join with us
              <span>
                <i className="fal fa-long-arrow-right"></i>
                <i className="fal fa-long-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
