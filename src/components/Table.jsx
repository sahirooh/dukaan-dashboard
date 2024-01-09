import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { BiSort } from "react-icons/bi";

const tableData = [
    {orderId:281209,successful:true,transactionID:"131634495747",refundDate:"Today, 08:45 PM",orderAmount:"1,125.00"},
    {orderId:281208,successful:false,transactionID:"131634495747",refundDate:"Yesterday, 3:00 PM",orderAmount:"1,125.00"},
    {orderId:281207,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281206,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281205,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"},
    {orderId:281204,successful:true,transactionID:"131634495747",refundDate:"12 Jul 2023, 03:00 PM",orderAmount:"1,125.00"}
]

const TableFilters=()=>
{
    return (
      <section className="flex justify-between max-sm:items-center max-sm:px-2">
        <div className="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded max-sm:space-x-1 max-sm:px-2 max-sm:py-1 max-sm:h-fit">
          <IoIosSearch className="max-sm:w-4 text-[#999] max-sm:h-4" />
          <input
            className="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999] max-sm:text-xs max-sm:w-fit"
            placeholder="Order ID or transaction ID"
          />
        </div>

        <div className="flex items-center space-x-4 max-sm:text-xs max-sm:space-x-2">
          <span className="flex items-center space-x-3 bg-white px-3 py-1.5 border rounded border-border shadow-sm max-sm:space-x-1 max-sm:px-1.5 hover:cursor-pointer">
            <p className=" text-text">Sort</p>
            <BiSort className="w-4 h-4 text-text" />
          </span>

          <div className="border border-border p-2 rounded hover:cursor-pointer">
            <MdOutlineFileDownload className="w-4 h-4 text-text" />
          </div>
        </div>
      </section>
    );
}

const TableCardItem=({orderId,successful,transactionID,refundDate,orderAmount,index})=>
{
    return (
        <tr >
            <td className='text-[#146EB4] px-0 font-medium  text-sm leading-5 max-sm:text-[8.5px] '>
              <p className={`${tableData.length===(index + 1)?"":"border-b"} border-background-light py-3.5 ml-3 max-sm:ml-1.5`}>#{orderId}</p>
            </td>
            <td className=' p-0 text-sm leading-5 max-sm:text-[8.5px]'>
              <section className={`${tableData.length===(index + 1)?"":"border-b"} w-fit  px-3 py-3.5  border-background-light flex items-center space-x-1.5 max-sm:px-0 max-sm:space-x-[3px]`}>
                <aside className={`w-2.5 h-2.5 ${successful?"bg-green-600":"bg-gray-500"} rounded-full max-sm:w-1.5 max-sm:h-1.5`}></aside>
                <p className=' text-text'>{successful?"Successful":"Processing"}</p>
              </section>
            </td>
            <td className='text-text p-0  text-sm leading-5 max-sm:text-[8.5px]'>
              <p className={`${tableData.length===(index + 1)?"":"border-b"} border-background-light py-3.5 px-3 max-sm:px-0`}>{transactionID}</p>
              </td>
            <td className='text-text  p-0 text-sm leading-5 max-sm:text-[8.5px]'>
              <p className={`${tableData.length===(index + 1)?"":"border-b"} border-background-light py-3.5 px-3 max-sm:px-0`}>{refundDate}</p>
              </td>
            <td className='text-text p-0 text-right text-sm leading-5 max-sm:text-[8.5px] '>
              <p className={`${tableData.length===(index + 1)?"":"border-b"} border-background-light py-3.5  mr-3`}>₹{orderAmount}</p>
            </td>
            
        </tr>
    )
}

const Table = () => {
  return (
    <div className="bg-white border border-white  rounded-lg p-3 space-y-3 max-sm:p-0 max-sm:py-2 max-sm:w-screen" style={{boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
        <TableFilters />
        <table className=' w-full text-left border-collapse max-sm:table-fixed max-sm:w-full'>
          <thead className='max-sm:w-screen'>
            <tr className="bg-[#F2F2F2] ">
                <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pl-1 max-sm:py-1.5 max-sm:w-10'>Order ID</th>
                <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:py-1.5 max-sm:w-11'>Status</th>
                <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:py-1.5 max-sm:w-14'>Transaction ID</th>
                <th className='text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:py-1.5 max-sm:w-16'>Refund date</th>
                <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-r text-sm max-sm:text-[8.5px] max-sm:px-0 max-sm:pr-1 max-sm:py-1.5 max-sm:w-14 text-right">Order amount</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map(({orderId,successful,transactionID,refundDate,orderAmount},index)=>(
                <TableCardItem key={orderId} orderId={281209} successful={successful} transactionID={transactionID} refundDate={refundDate} orderAmount={orderAmount} index={index}/>
            ))}
            </tbody>
            </table>
          </div>
  )
}

export default Table