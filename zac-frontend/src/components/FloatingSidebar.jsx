import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const FloatingSidebar = () => {
        const menus = [
        { name: "Admin Registration", link: "/admin/login", icon: MdOutlineDashboard },
        { name: "Teacher Registration", link: "/admin/teacher-mgt", icon: AiOutlineUser },
        { name: "Student Registration", link: "/admin/student-mgt", icon: FiMessageSquare },
        ];
        const [open, setOpen] = useState(false);

        return (
        <div
            className={`bg-[#081a51] absolute right-0 h-62 top-1/3 transform-translate-x-1/2 rounded-s ${
            open ? "w-42" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-start">
            <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
                <Link
                to={menu?.link}
                key={i}
                className={` ${
                    menu?.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                    style={{
                    transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                    {menu?.name}
                </h2>
                <h2
                    className={`${
                    open && "hidden"
                    } absolute bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-8 group-hover:py-3 group-hover:right-8 group-hover:duration-300 group-hover:w-fit text-lg`} /* Increased font size here */
                >
                    {menu?.name}
                </h2>
                </Link>
            ))}
            </div>
        </div>
    );
}

export default FloatingSidebar
