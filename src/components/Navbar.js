import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-stone-400  to-neutral-300 flex justify-between items-center text-[2rem] font-medium border p-[1rem] rounded-lg shadow-md shadow-slate-400">
      <div className="ml-[1.4rem]">
        <span> Redefine </span>
        <br />
        <span className="ml-[4.4rem]">Status</span>
      </div>
      <div className="flex gap-[3rem] ml-auto mr-[2rem] cursor-pointer">
        <p className="hover:text-[blue]">Home</p>
        <p className="hover:text-[blue]">About Us</p>
        <p className="hover:text-[blue]">Contact Us</p>
      </div>
      <div className="mr-[2rem]">
        <input
          className="border rounded-lg ml-[1rem] p-[.6rem]"
          placeholder="Search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
