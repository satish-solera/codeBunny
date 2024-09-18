import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";

function Footer() {
  return (
    <>
      <div className="mt-10 bg-red-500 text-white font-bold mx-2 flex gap-96">
        <div className="mx-2 py-2">
          <h1>About Us</h1>
          <h1>codeBunny Social Media</h1>

          {/*
  hey this is comment*/}

          <h1 className="flex gap-2 ">Instagram < IoLogoInstagram/></h1>
          <h1 className="flex gap-2 ">Tweeter  <SlSocialTwitter /></h1>
          <h1 className="flex gap-2 ">Youtube  < TiSocialYoutube  /></h1>
        </div>

        <div className="bg-green-500 w-[20rem] text-center">
          <h1> alumini </h1>
          <div className="">hry this me</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
