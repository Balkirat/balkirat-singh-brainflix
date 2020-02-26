import React from "react";
import Logo from "../../assets/Logo/Logo.svg";

function MainLogo() {
  return (
    <div className = "header__logo">
      <img src={Logo} alt="site logo"></img>
    </div>
  );
}

export default MainLogo;
