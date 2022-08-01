import React from "react";
import "./navbar.css";
import Netflix_logo from "../Images/Netflix_logo.png";
import profile_logo from "../Images/profile_icon.png";

window.addEventListener("scroll", () => {
  if (window.scrollY >=150 ) {
    document.querySelector(".Navbar").style.background = "var(--blackColor)";
  }
  else
  {
    document.querySelector(".Navbar").style.background = "transparent";
  }
});

export default function Navbar() {
  return (
    <div className="Navbar">
      <a  href="top"><img src={Netflix_logo} className="Netflix" alt="" /></a>
      <img src={profile_logo} className="Profile" alt="" />
    </div>
  );
}
