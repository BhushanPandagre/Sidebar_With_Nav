
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineLogout, AiOutlineMail, AiOutlineSetting, AiOutlineFileText } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const Menus = [
    { title: "Dashboard", icon: <MdDashboard /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", icon: <BsFillImageFill />, spacing: true },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: ["Submenu 1", "Submenu 2", "Submenu 3"],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", icon: <BsPerson />, spacing: true },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white p-5 pt-8 duration-300 ${open ? "w-72" : "w-20"} relative`}>
        <BsArrowLeftShort
          className={`bg-white text-gray-900 text-3xl rounded-full absolute -right-3 top-9 border border-gray-900 cursor-pointer transition-transform ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center gap-2">
          <AiFillEnvironment className="bg-amber-300 text-4xl rounded" />
          <h1 className={`text-xl font-semibold transition-all ${open ? "scale-100" : "hidden"}`}>Gadi Parking</h1>
        </div>

        <div className={`flex items-center bg-gray-800 mt-6 p-2 rounded-md`}>
          <BsSearch className="text-white text-lg" />
          <input
            type="text"
            placeholder="Search"
            className={`bg-transparent text-white text-sm w-full focus:outline-none ${open ? "ml-2" : "hidden"}`}
          />
        </div>

        <ul className="mt-4">
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                className={`flex items-center text-sm p-2 cursor-pointer hover:bg-gray-800 rounded-md transition-all ${
                  menu.spacing ? "mt-6" : "mt-2"
                }`}
                onClick={() => setSubmenuOpen(submenuOpen === index ? null : index)}
              >
                <span className="text-2xl">{menu.icon}</span>
                <span className={`ml-3 flex-1 ${open ? "block" : "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && <BsChevronDown className={`${submenuOpen === index ? "rotate-180" : "rotate-0"}`} />}
              </li>
              {menu.submenu && submenuOpen === index && open && (
                <ul className="ml-8">
                  {menu.submenu.map((sub, i) => (
                    <li key={i} className="text-gray-400 text-xs p-2 cursor-pointer hover:bg-gray-800 rounded-md">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>

    
    </div>
  );
}

export default Sidebar;
