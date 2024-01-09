import { FaRegQuestionCircle } from "react-icons/fa";

const AmountPending = ({ status }) => {
  return (
    <div
      className="rounded-lg grow flex flex-col space-y-4 p-5 bg-white"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <div className="flex space-x-2 items-center text-text">
        <h1>Amount Pending</h1>
        <FaRegQuestionCircle className="text-[#808080] text-[14px] max-sm:text-[12px]" />
      </div>
      {status ? (
        <h1 className="text-dark text-[32px] leading-[38px] font-medium grow max-sm:text-3xl">
          ₹23,92,312.19
        </h1>
      ) : (
        <div className="flex items-center">
          <h1 className="text-dark text-[32px] leading-[38px] font-medium grow max-sm:text-2xl max-sm:mr-3">
            ₹92,312.20
          </h1>
          <span className="font-medium underline text-secondary hover:cursor-pointer">
            23 Orders
          </span>
        </div>
      )}
    </div>
  );
};

const StatusCard = () => {
  return (
    <div className=" flex items-start space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 max-sm:w-screen max-sm:items-stretch max-sm:px-3">
      <div className="relative grow bg-secondary p-5 rounded-lg flex flex-col space-y-4 ">
        <div className="flex items-center space-x-2">
          <h1 className="text-white">Next Payout</h1>
          <FaRegQuestionCircle className="text-white text-[14px] max-sm:text-[12px]" />
        </div>
        <main className="flex items-center pb-8 max-sm:justify-between">
          <h1 className="grow text-white font-medium text-[32px] leading-[38px] max-sm:text-2xl max-sm:mr-6">
            ₹2,312.23
          </h1>
          <span className="font-medium underline text-white hover:cursor-pointer">
            23 Orders
          </span>
        </main>
        <div className="absolute bottom-0 w-full left-0 px-6 py-2 rounded-lg flex justify-between bg-[#0E4F82]">
          <h1 className="text-[#F2F2F2] text-sm">Next payout date:</h1>
          <p className=" text-sm text-[#F2F2F2] font-medium">Today, 04:00PM</p>
        </div>
      </div>

      <AmountPending />
      <AmountPending status={true} />
    </div>
  );
};

export default StatusCard;
