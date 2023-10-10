import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", to: "/admin-protected" }, // Add the 'to' prop for links
    { title: "Department", icon: <AiOutlineFileText />, to: "/admin/department" }, // Add 'to' prop for links
    { title: "Course", spacing: true, icon: <BsFillImageFill />, to: "/admin/course" },
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
                // If 'to' prop is defined, use Link component for navigation
                <Link
                  to={menu.to}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
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
                </Link>
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
                    <Link to={submenuItem.to}>
                      <span
                          className="text-base font-medium"
                      >
                        {submenuItem?.title}
                      </span>
                    </Link>
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
