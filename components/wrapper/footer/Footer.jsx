import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <footer className="mt-24 space-y-12">
      <section className="flex flex-col lg:flex-row justify-between w-4/5 mx-auto">
        <h1 className="font-bold text-2xl">
          Contact Us to Start <br /> Visualize Your Idea
        </h1>
        <form className="flex flex-row space-x-2 my-2 w-full lg:w-3/5">
          <input
            type="text"
            placeholder="enter your email here"
            className="rounded-full border-2 border-[#EE7526] focus:border-[#EE7526] px-2 py-1 input-middle w-3/5 lg:w-4/5"
          />
          <button className="bg-[#EE7526] rounded-full px-2 lg:px-3 py-1 text-white w-auto lg:w-1/5">
            Contact Us
          </button>
        </form>
      </section>
      <hr className="w-4/5 mx-auto" />
      <section className="flex flex-col lg:flex-row justify-around w-4/5 mx-auto">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="font-bold">
            About <br /> Raon Studio
          </h1>
          <p className="text-xs w-3/4">
            We are illustration company who have NFT Art, mascot and cartoon
            character, t-shirt and merch, and anime illustration services. We
            also do graphic and presentation design for life.
          </p>
          <ul className="flex flex-row gap-x-3">
            <li>
              <TwitterIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-evenly w-full lg:w-1/2 align-top">
          <ul className="space-y-2">
            <p className="font-bold">Company</p>
            <li className="text-xs">About</li>
            <li className="text-xs">Works</li>
            <li className="text-xs">Service</li>
            <li className="text-xs">Blog</li>
          </ul>
          <ul className="space-y-2">
            <p className="font-bold">Company</p>
            <li className="text-xs">FAQ</li>
            <li className="text-xs">Contact Us</li>
            <li className="text-xs">Book a Service</li>
            <li className="text-xs">Payment</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
