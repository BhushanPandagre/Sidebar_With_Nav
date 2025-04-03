import {
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

function Header() {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4 shadow-md">
      {/* Left Section */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <AiOutlineUser className="text-2xl cursor-pointer" />
        <AiOutlineMail className="text-2xl cursor-pointer" />
        <AiOutlineSetting className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
