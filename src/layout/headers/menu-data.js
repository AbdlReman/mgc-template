const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
   
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "MGC",
    link: "#",
    sub_menus: [
    
     
      { link: "/maidaanmarketing", title: "Maidaan Marketing" },
      { link: "/maidaanproperties", title: "Maidaan properties" },
      { link: "/victorybuilders", title: "Victory Builders" },
      { link: "/victoryconstruction", title: "Victory Construction" },
      { link: "/gpg", title: "GPG" },
      // { link: "/home-5", title: "Photography" },
      // { link: "/home-6", title: "Minimal Portfolio" },
      // { link: "/home-7", title: "Law Firm" },
      // { link: "/home-10", title: "Seo Agency" },
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Policies",
  //   link: "/privacy-policy",
   
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
   
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
