import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full items-center px-8 py-3 space-x-4 sticky top-0 z-30 sm:pt-6 sm:pb-4 sm:space-x-2 sm:justify-between">
      <p className=" text-xl font-medium max-sm:text-sm">Payouts</p>

      <div className="flex items-center space-x-2.5 grow max-sm:space-x-1 max-sm:grow-0">
        <FaRegQuestionCircle className="max-sm:w-2 text-gray-600 max-sm:h-2" />
        <p className=" text-xs text-text hover:underline hover:cursor-help max-sm:text-[8px] max-sm:hidden">
          How it works
        </p>
      </div>

      <div className="px-4 py-[9px] bg-[#F2F2F2] space-x-2 flex grow items-center rounded-md max-sm:px-2 max-sm:py-1.5 max-sm:grow-0 max-sm:space-x-1.5 max-sm:bg-gray-500/70">
        <IoIosSearch className="max-sm:w-4 max-sm:h-4" />
        <input
          className="grow text-[15px] outline-none bg-transparent leading-[22px] placeholder:text-[#808080] max-sm:text-xs"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="flex space-x-3 grow justify-end max-sm:grow-0 max-sm:space-x-1 sm:items-center">
        <div className=" p-2.5 bg-background-light rounded-full hover:cursor-pointer max-sm:p-1.5">
          <BsFillChatRightDotsFill className="w-4 text-[#4D4D4D] h-4" />
        </div>

        <div className=" p-2.5 bg-background-light rounded-full flex items-center justify-center hover:cursor-pointer">
          <FaSortDown className="w-4 h-4 text-[#4D4D4D] " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
