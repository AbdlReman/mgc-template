import Link from "next/link";
import React from "react";

// popular_feeds_data data
const popular_feeds_data = [
  {
    id: 1,
    img: "/assets/img/blog/sidebar/blog-sidebar-1.jpg",
    date: "July 21, 2021",
    title: <>Having education in an area helps</>,
  },
  {
    id: 2,
    img: "/assets/img/blog/sidebar/blog-sidebar-2.jpg",
    date: "July 21, 2021",
    title: <>Having education in an area helps</>,
  },
  {
    id: 3,
    img: "/assets/img/blog/sidebar/blog-sidebar-3.jpg",
    date: "14 January. 2022",
    title: "Role of Genetics in treating Heigh-grade glioma",
  },
];

const PopularFeeds = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Popular Feeds</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {popular_feeds_data.map((item, i) => (
              <div key={i} className="rc__post mb-20 d-flex align-items-center">
                <div className="rc__post-thumb mr-20">
                  <Link href="/blog-details">
                    <img src={item.img} alt="them-pure" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href="/blog-details"> {item.title}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>
                      <i className="fal fa-calendar-alt"></i> {item.date}
                    </span>
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

export default PopularFeeds;
