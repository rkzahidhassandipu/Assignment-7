import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WWdk2Yrx/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center w-4/5">
          <div className=" w-full text-left">
            <h1 className="mb-5 text-5xl font-bold text-white">Bid on Unique Items from <br /> Around the World</h1>
            <p className="mb-5 text-white text-2xl">
            Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
            </p>
            <button className="rounded-full px-10 py-2 font-semibold bg-white text-black">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
