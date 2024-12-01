import React from "react";

// category_data
const category_data = [
  {
    category: "Business",
    blog_item: "28",
  },
  {
    category: "Cleaning",
    blog_item: "07",
  },
  {
    category: "Consultant",
    blog_item: "09",
  },
  {
    category: "Creative",
    blog_item: "12",
  },
  {
    category: "Technology",
    blog_item: "19",
  },
];

const Category = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {category_data.map((item, i) => (
              <li key={i}>
                <a href="#">{item.category}</a> <span>{item.blog_item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
