import React from "react";
import ProfileImageUpload from "../../ProfileImageUpload/ProfileImageUpload";
import Settingbg from "../../assets/Settingbg.png";
import { useState } from "react";
const Settings = () => {
  const [profileformData, setProfileformData] = useState({
    fullName: "",
    phone: "",
    gender: "",
    language: "",
  });

  const [businessformData, setBusinessformData] = useState({
    businessName: "",
    businessAddress: "",
    businessPhone: "",
  });

    //functions for profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleProfile = (e) => {
    e.preventDefault();
    console.log("Profile data Submitted:", profileformData);
  };

  //functions for business
 const businesshandleChange = (e) => {
    const { name, value } = e.target;
    setBusinessformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleBusiness = (e) => {
    e.preventDefault();
    console.log("Business Profile data Submitted:", businessformData);
  };



  return (
    <>
    {/* main div */}
    <div className="overflow-hidden">
      <div className="relative flex items-center space-x-4  border rounded-lg overflow-hidden">
        {/* Background image */}
        <img
          src={Settingbg}
          alt="background"
          className="absolute inset-0 w-full h-full opacity-20 object-cover z-10 pointer-events-none"
        />

        <div className="flex m-2">
          <div className="w-1/2 bg-[#2F3744] border border-transparent  rounded-lg">
            <div className="p-4">
              <h1 className="text-3xl font-bold text-slate-100 p-2">
                Your Profile
              </h1>
              <div className=" m-2 flex bg-[#282F3D] border border-transparent rounded-lg">
                <div>
                  <ProfileImageUpload />
                </div>
                <div className="p-2">
                  <h2 className="text-3xl text-slate-100 font-semibold">
                    Faizan Jabbar
                  </h2>
                  <h2 className="text-lg text-slate-100 font-semibold">
                    Faizanjabar@gmail.com
                  </h2>
                </div>
              </div>
              <form onSubmit={handleProfile}>
                <div className="p-2  ">
                  <input
                    type="text"
                      name="fullName"
                      
                    value={profileformData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full shadow-md p-2 border border-transparent placeholder-slate-100 text-slate-100 rounded-md focus:border-transparent focus:ring-0 bg-[#282F3D]"
                  />
                </div>
                <div className="p-2 ">
                  <select
                    name="gender"
                    value={profileformData.gender}
                    onChange={handleChange}
                    className="bg-[#282F3D] shadow-md text-slate-100 w-full p-2 border border-transparent focus:border-transparent rounded-md "
                  >
                    <option defaultValue="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="p-2">
                  <input
                    type="text"
                    name="phone"
                    value={profileformData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full p-2 shadow-md  border border-transparent focus:border-transparent rounded-md bg-[#282F3D] text-slate-100 placeholder-slate-100"
                  />
                </div>
                <div className="p-2">
                  <select
                    name="language"
                    value={profileformData.language}
                    onChange={handleChange}
                    className="bg-[#282F3D] shadow-md focus:border-transparent text-slate-100 border border-transparent rounded-md w-full p-2"
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">French</option>
                    <option value="French">Portuguese</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>
                <div className="flex justify-center m-2">
                  <button
                    type="submit"
                    className="w-full shadow-md text-center font-bold bg-[#282F3D] text-white p-2 border border-transparent rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Options section */}
          <div className="p-2 w-auto">
            <div className=" bg-[#2F3744] border border-transparent rounded-lg">
              <div className="p-2">
                <h1 className="text-3xl font-bold text-slate-100 p-2">
                  Options
                </h1>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100 p-2">
                  Currency
                </h2>
              </div>
              <div className="p-2 ">
                <select className="bg-[#282F3D] focus:border-transparent shadow-md text-slate-100 w-full p-2 border border-transparent rounded-md ">
                  <option value="PKR">PKR</option>
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                  <option value="CSD">CSD</option>
                </select>
              </div>
              <div className="m-2">
                <h2 className="text-xl font-bold text-slate-100 p-2">
                  More currency options will be available in the future
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Business Profile */}
      </div>
        <form onSubmit={handleBusiness}>
        <div className="ml-4  w-2/5 p-2  bg-[#2F3744] border border-transparent rounded-lg">
        <div>
          <h2 className="p-2  text-3xl font-bold text-slate-100">
            Your Business Profile
          </h2>
        </div>
        <div className="p-2">
          <input
                type="text"
                name="businessName"
                value={businessformData.businessName}
                onChange={businesshandleChange}
            placeholder="Business Name"
            className="w-full p-2 shadow-md border border-transparent focus:border-transparent rounded-md bg-[#282F3D] text-slate-100 placeholder-slate-100"
          />
        </div>
        <div className="p-2">
          <input
                type="text"
                name="businessAddress"
                value={businessformData.businessAddress}
                onChange={businesshandleChange}
            placeholder="Business Address"
            className="w-full p-2 shadow-md border border-transparent focus:border-transparent rounded-md bg-[#282F3D] text-slate-100 placeholder-slate-100"
          />
        </div>
        <div className="p-2">
          <input
                type="text"
                name="businessPhone"
                value={businessformData.businessPhone}
                onChange={businesshandleChange}
            placeholder="Business Phone"
            className="w-full p-2 shadow-md border border-transparent focus:border-transparent rounded-md bg-[#282F3D] text-slate-100 placeholder-slate-100"
          />
        </div>
        <div className="p-2">
          <button type="submit" className="w-full shadow-md text-center font-bold bg-[#282F3D] text-white p-2 border border-transparent rounded-md">
            Save
          </button>
        </div>
          </div>
          </form>
      </div>
      </>
  );
};

export default Settings;
