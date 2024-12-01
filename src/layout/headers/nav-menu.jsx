import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((menu, i) => (
          <li
            key={i}
            className={`${menu.has_dropdown ? "has-dropdown" : ''} ${
              menu.mega_menu ? "has-megamenu" : ''
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            
            {/* Render submenu if sub_menus is defined */}
            {menu.has_dropdown && menu.sub_menus && Array.isArray(menu.sub_menus) && (
              <ul className="submenu">
                {menu.sub_menus.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
