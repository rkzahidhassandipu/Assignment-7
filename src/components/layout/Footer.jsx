import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div>
            <img src="https://i.ibb.co/FLZh33k1/Auction-Gallery.png" alt="" />
        </div>
        <ul className="flex">
            <li className="text-2xl">
                <a href="">Bid.</a>
            </li>
            <li className="text-2xl">
                <a href="">Win.</a>
            </li>
            <li className="text-2xl">
                <a href="">Own.</a>
            </li>
        </ul>

        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>
        <aside>
          <p>
            ©{new Date().getFullYear()}   AuctionHub. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
