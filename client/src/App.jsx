// import { useState } from "react";
// import {
//   BsArrowLeftShort,
//   BsSearch,
//   BsChevronDown,
//   BsFillImageFill,
//   BsReverseLayoutTextSidebarReverse,
//   BsPerson,
// } from "react-icons/bs";
// import {
//   AiFillEnvironment,
//   AiOutlineBarChart,
//   AiOutlineLogout,
//   AiOutlineMail,
//   AiOutlineSetting,
// } from "react-icons/ai";
// import { AiOutlineFileText } from "react-icons/ai";
// import { MdDashboard } from "react-icons/md";

// function App() {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setsubmenuOpen] = useState(false);

//   const Menus = [
//     { title: "Dashboard" },
//     { title: "Pages", icon: <AiOutlineFileText /> },
//     { title: "Media", spacing: true, icon: <BsFillImageFill /> },

//     {
//       title: "Projects",
//       icon: <BsReverseLayoutTextSidebarReverse />,
//       submenu: true,
//       submenuItems: [
//         { title: "Submenu 1" },
//         { title: "Submenu 2" },
//         { title: "Submenu 3" },
//       ],
//     },
//     { title: "Analytics", icon: <AiOutlineBarChart /> },
//     { title: "Inbox", icon: <AiOutlineMail /> },
//     { title: "Profile", spacing: true, icon: <BsPerson /> },
//     { title: "Setting", icon: <AiOutlineSetting /> },
//     { title: "Logout", icon: <AiOutlineLogout /> },
//   ];
//   return (
//     <>
//       <div className="flex">
//         <div
//           className={`bg-dark-purple h-screen p-5 pt-8 ${
//             open ? "w-72" : "w-20"
//           } duration-300 relative`}
//         >
//           <BsArrowLeftShort
//             className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
//               !open && "rotate-180"
//             }`}
//             onClick={() => setOpen(!open)}
//           />

//           <div className="inline-flex">
//             <AiFillEnvironment
//               className={`bg-amber-300 text-4xl rounded
//            cursor-pointer block float-left mr-2 duration-500 ${
//              open && "rotate-[360deg]"
//            }`}
//             />
//             <h1
//               className={`text-white origin-left font-medium text-2xl duration-300 ${
//                 !open && "scale-0"
//               }`}
//             >
//               Gadi Parking{" "}
//             </h1>
//           </div>
//           <div
//             className={`flex items-center rounded-md bg-light-white mt-6  ${
//               !open ? "p-2.5" : "p-4"
//             }   py-2`}
//           >
//             <BsSearch
//               className={`text-white text-lg block float-left cursor-pointer  ${
//                 open && "mr-2"
//               }`}
//             />
//             <input
//               type={"search"}
//               placeholder="Search"
//               className={`text-base bg-transparent w-full text-white focus:outline-none ${
//                 !open && "hidden"
//               }`}
//             />
//           </div>
//           <ul className="pt-2">
//             {Menus.map((menu, index) => (
//               <>
//                 <li
//                   key={index}
//                   className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${
//                     menu.spacing ? "mt-9" : "mt-2"
//                   }`}
//                 >
//                   <span className="text-2xl block float-left">
//                     {" "}
//                     {menu.icon ? menu.icon : <MdDashboard />}
//                   </span>
//                   <span
//                     className={`text-base font-medium flex-1 duration-200 ${
//                       !open && "hidden"
//                     }`}
//                   >
//                     {menu.title}
//                   </span>
//                   {menu.submenu && open && (
//                     <BsChevronDown
//                       className={`${submenuOpen && "rotate-180"}`}
//                       onClick={() => setsubmenuOpen(!submenuOpen)}
//                     />
//                   )}k
//                 </li>

//                 {menu.submenu && submenuOpen && open && (
//                   <ul>
//                     {menu.submenuItems.map((submenuItem, index) => (
//                       <li
//                         key={index}
//                         className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md`}
//                       >
//                         {submenuItem.title}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ))}
//           </ul>
//         </div>

//         <div className="p-7">
//           <h1 className="text-2xl font-semibold">Home Page</h1>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// IMPORTANT

import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineFileText,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import Header from "./Header";

function App() {
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
      <div
        className={`bg-gray-900 text-white p-5 pt-8 duration-300 ${open ? "w-72" : "w-20"} relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-gray-900 text-3xl rounded-full absolute -right-3 top-9 border border-gray-900 cursor-pointer transition-transform ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center gap-2">
          <AiFillEnvironment className="bg-amber-300 text-4xl rounded" />
          <h1 className={`text-xl font-semibold transition-all ${open ? "scale-100" : "hidden"}`}>
            Gadi Parking
          </h1>
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
                {menu.submenu && <BsChevronDown className={`${submenuOpen === index ? "rotate-180" : "rotate-0"}`} />}
              </li>
              {menu.submenu && submenuOpen === index && (
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="text-2xl cursor-pointer" />
            <AiOutlineSetting className="text-2xl cursor-pointer" />
            <BsPerson className="text-2xl cursor-pointer" />
          </div>
        </header> */}
        <Header/>

        {/* Content Area */}
        <main className="flex-1 p-7 bg-gray-100">
          <h2 className="text-2xl font-semibold">Welcome to Your Dashboard</h2>
        </main>
      </div>
    </div>
  );
}

export default App;


