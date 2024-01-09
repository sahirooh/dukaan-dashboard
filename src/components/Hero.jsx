import TopNav from "./TopNav";
import { IoIosArrowDown } from "react-icons/io";
import Table from "./Table";
import StatusCard from "./StatusCard";

const Hero = () => {
  return (
    <main className="grow relative">
      <TopNav />
      <div className=" p-8 space-y-6 max-sm:p-0 max-sm:mt-2 max-sm:space-y-4">
        <div className="flex justify-between items-center max-sm:mx-2">
          <h1 className="text-text-dark text-xl font-medium max-sm:text-lg ">
            Overview
          </h1>
          <div className="relative bg-white">
            <select className=" py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-white border border-border rounded-md text-text max-sm:text-sm">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
            <IoIosArrowDown className="absolute right-3.5 top-3 hover:cursor-pointer pointer-events-none max-sm:w-3 max-sm:h-3" />
          </div>
        </div>
        <StatusCard />
        <h1 className="text-text-dark text-xl font-medium max-sm:text-lg max-sm:ml-2">
          Transactions | This Month
        </h1>
        <div className=" space-x-3 max-sm:ml-3">
          <span className="py-1.5 px-4 bg-background-light rounded-full text-sm font-medium text-[#808080] max-sm:text-xs">
            Payouts {"(22)"}
          </span>
          <span className="py-1.5 px-4 bg-secondary rounded-full text-sm font-medium text-white max-sm:text-xs">
            Refunds {"(6)"}
          </span>
        </div>
        <Table />
      </div>
    </main>
  );
};

export default Hero;
