import React from "react";
import RightCartIcon from "../Cart/RightCartIcon";

function Footer() {
  return (
    <>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          OtakuStore - Online Shopping for Anime and Otaku Merchandise.
        </span>
      </div>
    </>
  );
}

export default Footer;
