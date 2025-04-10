import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar mx-auto w-4/5 py-5">
        <div className="navbar-start ">
          <div>
            <img src="https://i.ibb.co/FLZh33k1/Auction-Gallery.png" alt="" />
          </div>
        </div>
        <div className="navbar-center">
          <ul className="flex">
            <li className="px-5 text-xl"><a href="#">Home</a></li>
            <li className="px-5 text-xl"><a href="#">Auctions</a></li>
            <li className="px-5 text-xl"><a href="#">Categories</a></li>
            <li className="px-5 text-xl"><a href="#">How to works</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle mx-3">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle mx-3">
            <img
              className="rounded-full"
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image-7268049"
              border="0"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
