import React from 'react';
import Category from '../blog-pages/category';


// search data 
const search_data = [
    {
        id: 1,
        date: "June 29, 2022",
        time: "20 min read",
        title: "The Technology Has Improve Business Today",
    },
    {
        id: 2,
        date: "June 29, 2022",
        time: "20 min read",
        title: "CSS is constantly evolving, and some cool and useful",
    },
    {
        id: 3,
        date: "June 29, 2022",
        time: "20 min read",
        title: "Either go completely noticed or are not talkeds",
    },
    {
        id: 4,
        date: "June 29, 2022",
        time: "20 min read",
        title: "About as much as others for some reason or another.",
    },
    {
        id: 5,
        date: "June 29, 2022",
        time: "20 min read",
        title: "About as much as others for some reason or another.",
    },
    {
        id: 6,
        date: "June 29, 2022",
        time: "20 min read",
        title: "CSS properties and selectors is going on",
    },
    {
        id: 7,
        date: "June 29, 2022",
        time: "20 min read",
        title: "After reading Louis Lazaris’ insightful article",
    },
    {
        id: 8,
        date: "June 29, 2022",
        time: "20 min read",
        title: "Those HTML Attributes You Never Use.",
    },


]

const SearchArea = () => {
    return (
      <>
        <div className="postbox__area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-12">
                <div className="postbox__wrapper pr-50 mr-30">
                  <div className="tp-search-result-page">
                    <div className="row">

                      {search_data.map((item, i) => (
                        <div key={i} className="col-md-6">
                          <div className="tp-search-item  wow tpfadeUp  mb-30">
                            <div className="tp-search-item-meta">
                              <span>
                                <a href="#">{item.date}</a>{" "}
                              </span>
                              <span className="spt"> / By</span>
                              <span>{item.time}</span>
                            </div>
                            <h3 className="tp-search-item__title">
                              <a href="#">{item.title}</a>
                            </h3>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-12">
                <div className="sidebar__wrapper">
                  <div className="sidebar__widget mb-40">

                    <div className="sidebar__widget-content">
                      <h3 className="sidebar__widget-title">Search here</h3>
                      <div className="sidebar__search">
                        <form onSubmit={(e)  => e.preventDefault()}>
                          <div className="sidebar__search-input">
                            <input
                              type="text"
                              placeholder="Search your keyword..."
                            />
                            <button type="submit">
                              <i className="far fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* category start */}
                    <Category />
                    {/* category end */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SearchArea;