import React from "react";
import SearchBar from "../SearchInput";
import MainLogo from "../Logo";
import UploadButton from "../UploadButton";
import Icon from "../Icon";
import "./styles.scss";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link style={{ textDecoration: 'none' }} to='/'><MainLogo /></Link>
      <SearchBar />
      <div className="header__button">
      <Link  style={{ textDecoration: 'none' }} to='/upload'><UploadButton /></Link>
        <Icon />
      </div>
    </header>
  );
}

export default Header;
