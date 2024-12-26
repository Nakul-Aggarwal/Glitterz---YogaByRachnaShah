import React from "react";
import Container from "./container";

export default function OnlineClasses() {
  return (
    <div className={`flex w-full flex-col mt-4 items-center justify-center text-center`}>
      <table className="text-lg lg:text-xl border-collapse border border-slate-500 shadow-lg hover:shadow-2xl hover:translate-x-0.5 hover:translate-y-0.5">
        <thead className="bg-gray-100 ">
          <tr className="bg-gray-100">
            <td className="border-collapse border border-slate-500 py-1.5 text-clay-400">Days</td>
            <td className="border-collapse border border-slate-500 py-1.5 text-clay-400">Timings (India)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">Monday to Friday</td>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">6:00 am - 7:00 am</td>
          </tr>

          <tr>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">Monday to Friday</td>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">11:00 am - 12:00 pm</td>
          </tr>

          <tr>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">Monday to Friday</td>
            <td className="border-collapse border border-slate-500 px-10 py-5 text-gray-400">4:30 pm - 5:30 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
