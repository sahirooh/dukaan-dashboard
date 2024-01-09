import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaClipboardList } from "react-icons/fa";
import { PiSquaresFourLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiSpeakerWave } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";

const SideNav = () => {
  return (
    <div className="w-56 bg-primary px-2.5 py-4 flex flex-col sticky top-0 h-screen max-sm:min-w-56">
      <div className="flex space-x-3 px-[8.5px]">
        <img
          src={logo}
          alt="user profile"
          width={40}
          height={40}
          className=" rounded object-cover"
        />
        <div className="grow space-y-1">
          <h1 className="text-white font-medium text-[15px]">Nishyan</h1>
          <p className=" text-[13px] leading-4 text-white/80 underline hover:cursor-pointer w-fit">
            Visit store
          </p>
        </div>
        <IoIosArrowDown className="w-6 h-6 mt-3 font-semibold text-white/80 hover:cursor-pointer" />
      </div>
      <ul className="space-y-1 mt-6 grow">
        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <GoHome className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Home</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <FaClipboardList className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Orders</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <PiSquaresFourLight className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Products</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <CiDeliveryTruck className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Delivery</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <HiSpeakerWave className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Marketing</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <TbBrandGoogleAnalytics className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Analytics</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 bg-white/10 px-4 py-2 rounded">
          <MdPayments className="w-5 h-5 text-white" />
          <h1 className="text-white/80 text-sm font-medium">Payments</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <BsTools className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Tools</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <CiDiscount1 className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Discounts</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <FaUserFriends className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Audience</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <FaHandHoldingHeart className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Appearance</h1>
        </li>

        <li className="flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2">
          <BsLightningCharge className="w-5 h-5 text-white/80" />
          <h1 className="text-white/80 text-sm font-medium">Plugins</h1>
        </li>
      </ul>
      <div className=" py-1.5 px-3 bg-background rounded flex items-center space-x-3">
        <div className="p-1.5 bg-white/10 rounded h-fit">
          <CiWallet className="w-5 h-5 text-white/80" />
        </div>

        <div className="grow">
          <p className="text-white/80 text-[13px]">Available credits</p>
          <b className="font-medium text-white">222.10</b>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
