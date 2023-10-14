import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import Logout from "./Logout";


function Sidebar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const activeLink = 'text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md bg-light-white'
  const normalLink = 'text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md'

  const Menus = [
    { title: "Dashboard", to: "/admin-protected" }, // Add the 'to' prop for NavLinks
    { title: "Departments", icon: <AiOutlineFileText />, to: "/admin/department" }, // Add 'to' prop for NavLinks
    { title: "Courses", icon: <BsFillImageFill />, to: "/admin/course" },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1", to: "#" },
        { title: "Submenu 2", to: "#" },
        { title: "Submenu 3", to: "#" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout />, to: "/logout" },
  ];

  const toggleSubmenu = (index) => {
    if (Menus[index].submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setOpen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setOpen(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);


  return (
    <>
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            style={{
              transitionDelay: '2ms',
            }}
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Zephyr
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              {menu.to ? (
                // If 'to' prop is defined, use NavLink component for navigation
                <NavLink
                  to={menu.to}
                  className={({ isActive }) => isActive ? activeLink: normalLink}
                >
                  <span
                    className={`text-2xl block float-left duration-500 ${
                      open && "rotate-[360deg]"
                    }`}
                  >
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    // className={`text-base font-medium flex-1 duration-200 ${
                    //   !open && "hidden"
                    // }`}

                    style={{
                    transitionDelay: `${index + 3}00ms`,
                    }}
                    className={`text-lg font-medium flex-1 duration-200 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.title}
                  </span>
                  <span className="">
                    {menu.submenu && open && (
                      <BsChevronDown
                        className={`${submenuOpen && "rotate-180"}`}
                      />
                    )}
                  </span>
                </NavLink>
                              ) : (
                // Otherwise, render a regular list item
                <li
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                  onClick={() => toggleSubmenu(index)}
                >
                  <span
                    className={`text-2xl block float-left duration-500 ${
                      open && "rotate-[360deg]"
                    }`}
                  >
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  <span className="">
                    {menu.submenu && open && (
                      <BsChevronDown
                        className={`${submenuOpen && "rotate-180"}`}
                      />
                    )}
                  </span>
                </li>                
              )}              
              {menu.submenu && submenuOpen && open && (
                <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                  >
                    <NavLink to={submenuItem.to}>
                      <span
                          className="text-base font-medium"
                      >
                        {submenuItem?.title}
                      </span>
                    </NavLink>
                  </li>
                ))}               
              </ul>
              )}
            </React.Fragment>
          ))}           
               
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
