import React, { useState } from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");

  // Toggle the main menu
  const openMobileMenu = (menu) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  // Toggle the sub-menu
  const openSubMobileMenu = (s_menu) => {
    setSubMenu(subMenu === s_menu ? "" : s_menu);
  };

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {/* Render items without dropdown */}
            {!menu.has_dropdown && (
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}

            {/* Render items with dropdown, but not mega menu */}
            {menu.has_dropdown && !menu.mega_menu && (
              <li className="has-dropdown">
                <Link href={menu.link}>{menu.title}</Link>
                {menu.sub_menus && Array.isArray(menu.sub_menus) && (
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}

            {/* Render items with mega menu */}
            {menu.mega_menu && (
              <li className="has-dropdown has-mega-menu">
                <Link href={menu.link}>{menu.title}</Link>
                {menu.mega_menus && Array.isArray(menu.mega_menus) && (
                  <ul
                    className="mega-menu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.mega_menus.map((mega_m, i) => (
                      <li key={i}>
                        <Link href={mega_m.link} className="mega-menu-title">
                          {mega_m.title}
                        </Link>
                        {mega_m.layout && Array.isArray(mega_m.layout) && (
                          <ul
                            style={{
                              display: subMenu === mega_m.title ? "block" : "none",
                            }}
                          >
                            {mega_m.layout.map((sub_m, i) => (
                              <li key={i}>
                                <Link href={sub_m.link}>{sub_m.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        <a
                          className={`mean-expand ${
                            subMenu === mega_m.title ? "mean-clicked" : ""
                          }`}
                          onClick={() => openSubMobileMenu(mega_m.title)}
                          style={{ fontSize: "18px", cursor: "pointer" }}
                        >
                          <i className="fal fa-plus"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
