import React from "react";
import "./footerStyle.css";
import FooterLogo from "../../assets/img/logo.png";
import GooglePlayIcon from "../../assets/img/GooglePlay.svg";
import AppStoreIcon from "../../assets/img/AppStore.svg";
import FacebookIcon from "../../assets/img/facebook.svg";
import InstagramIcon from "../../assets/img/instagram.svg";
import TwitterIcon from "../../assets/img/twitter.svg";
import LinkedinIcon from "../../assets/img/linkedin.svg";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__content__line1">
          <img className="footer__content__logo" src={FooterLogo} alt="" />
          <div className="footer__content__column1">
            <ul className="footer__content__menu">
              <li className="footer__content__menu__item">
                <a href="#/">Cumulus Hakkında</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Eğitim Modelimiz </a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/"> SSS</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">İletişim</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Üyelik Sözleşmesi</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Aydınlatma Metni</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Çerez Politikası</a>
              </li>
            </ul>
          </div>
          <div className="footer__content__column2">
            <ul className="footer__content__menu">
              <li className="footer__content__menu__item">
                <a href="#/">Gizlilik Kuralları Hakkında Bilgilendirme</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">
                  Kişisel Verilerin İşlenmesine Dair Bilgilendirme
                </a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Üyelik Talebi ve Cayma Hakkı Ön Bilgilendirme</a>
              </li>
              <li className="footer__content__menu__item">
                <a href="#/">Mesafeli Üyelik Sözleşmesi</a>
              </li>
            </ul>
          </div>
          <div className="footer__content__column3">
            <div className="footer__content__platform">
              <h2 className="footer__content__header">
                Hemen İndir Her Yerden Eriş
              </h2>
              <div className="footer__content__platform__icon">
                <img
                  className="footer__app__download"
                  src={GooglePlayIcon}
                  alt=""
                />
                <img
                  className="footer__app__download"
                  src={AppStoreIcon}
                  alt=""
                />
              </div>
            </div>
            <div className="footer__content__social">
              <h2 className="footer__content__social__header">
                Bizi Takip Edin
              </h2>
              <div className="footer__content__social__icon">
                <img
                  className="footer__content__social__icon__image"
                  src={FacebookIcon}
                  alt=""
                />
                <img
                  className="footer__content__social__icon__image"
                  style={{ width: "50px" }}
                  src={InstagramIcon}
                  alt=""
                />
                <img
                  className="footer__content__social__icon__image"
                  src={TwitterIcon}
                  alt=""
                />
                <img
                  className="footer__content__social__icon__image"
                  src={LinkedinIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__alt">
          <div className="footer__altLine" />
          <p className="footer__copyright">
            &copy; Cumulus Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
