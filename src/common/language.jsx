import React from "react";


// language list data
const lag_list = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "Aribic",
  },
  {
    id: 3,
    name: "Bangla",
  },
];
const Language = () => {
  return (
    <>
      {lag_list.map((item, i) => (
        <li key={i}>
          <a href="#">{item.name}</a>
        </li>
      ))}
    </>
  );
};

export default Language;
