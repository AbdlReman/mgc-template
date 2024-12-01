import React from "react";

//  tags data
const tags = [
  { name: "business" },
  { name: "clean" },
  { name: "consult" },
  { name: "desgin" },
  { name: "keyboard" },
  { name: "kit" },
  { name: "mouse" },
  { name: "Popular" },
  { name: "room" },
  { name: "tech" },
  { name: "usability" },
  { name: "ux" },
];

const Tags = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((item, i) => (
              <a key={i} href="#">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
