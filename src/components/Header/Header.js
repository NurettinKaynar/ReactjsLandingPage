import React from "react";
import "./headerStyle.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div id="header" className="header">
      <img className="header__logo" src={logo} alt="Logo" />

      <ul className="header__menu">
        <li>
          <a className="header__menu__item" href="#learn">
            CUMULUS İLE PHOTOSHOP ÖĞREN
          </a>
        </li>
        <li>
          <a className="header__menu__item" href="#price">
            FİYATLANDIRMA
          </a>
        </li>
        <li>
          <a className="header__menu__item" href="#sss">
            NEYE İHTİYACIN VAR?
          </a>
        </li>
        <li>
          <a className="header__menu__item" href="#footer">
            İLETİŞİM
          </a>
        </li>
      </ul>
      {/* <Anchor className="header__menu">
        <Link
          className="header__menu__item"
          href="#learn"
          title="CUMULUS İLE PHOTOSHOP ÖĞREN"
        />
        <Link href="#price" title="FİYATLANDIRMA" />
        <Link href="#sss" title="NEYE İHTİYACIN VAR?" />
      </Anchor> */}
    </div>
  );
}

export default Header;
