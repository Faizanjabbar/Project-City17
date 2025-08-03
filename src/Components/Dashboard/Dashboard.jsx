import React from "react";
import Cardcontainer from "../Cardcontainer/Cardcontainer";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#343B47] m-2 px-4 py-8 border  rounded-lg">
        <div>
          <h2 className="text-4xl font-bold text-slate-100">N/A</h2>
              </div>
              <div className="p-2 flex">
        <div className="p-2">
          <select className="bg-[#555B65] border border-transparent rounded-lg p-2 text-3xl font-bold text-slate-100">
            <option className="border border-transparent rounded-lg">
              Last 30 Days
            </option>
          </select>
                  </div>
                  <div calssName="p-2">
                      <h2 className="text-5xl  text-slate-100">advertisement performance</h2>
                      <h2 className="text-4xl font-bold text-slate-100">stats</h2>
                  </div>
                  </div>
        <div>
          <Cardcontainer />
        </div>
      </div>
      <div className=" p-2 ">
        <div calssName=" py-4 bg-white border rounded-lg  ">
          <h2 className="text-4xl p-4 font-bold text-slate-100 bg-[#343B47] border rounded-lg">
            Active Campaigns
          </h2>
        </div>
        <div className="py-4">
          <h2 className="text-4xl p-4 font-bold text-slate-100 bg-[#343B47] border rounded-lg">Upcomming Due</h2>
        </div>
        <div className="py-0">
          <h2 className="text-4xl p-4 font-bold text-slate-100 bg-[#343B47] border rounded-lg">Upcomming Campaigns</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
