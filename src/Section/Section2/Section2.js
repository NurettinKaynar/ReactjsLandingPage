import React from "react";
import "./section2Style.css";
import OneAccount from "../../assets/img/one-account.svg";
import Seperator from "../../assets/img/seperator-diamond.svg";
import MultiAccount from "../../assets/img/multi-account.svg";
import PriceCard from "../../components/PriceCard/PriceCard";
import Badge from "../../assets/img/badge.svg";
function Section2() {
  return (
    <>
      <div id="price" />
      <div className="price">
        <div className="price__header">
          <h1 className="price__heading">Haydi paketini seçelim!</h1>
          <p className="price__altText">
            Hemen paketlerden en uygun olanını seç. Merak ettiğin içeriğe,
            dilediğin seviye videolarından başla, neler başaracağını gör.
          </p>
        </div>
        <img className="price__seperator" src={Seperator} alt="seperator" />

        <div className="price__card">
          <div className="offer">
            <p className="offer__text">Avantajlı Paket</p>
            <img className="offer__badge" src={Badge} alt="" />
          </div>
          <PriceCard
            topBannerImage={OneAccount}
            title="Bireysel Paket"
            altText="(1 Kullanıcı )"
            mat1="Tüm Platformlardan Erişim İmkanı"
            mat2="1 Yıl Sınırsız Erişim"
            percentMonth="%38"
            percentYear="%20"
            lastPriceMonth="54,99₺"
            lastPriceYear="500₺"
            nowPriceMonth="34,99"
            personel={true}
          />
          <PriceCard
            topBannerImage={MultiAccount}
            title="Aile Paketi"
            altText="(4 Kullanıcı )"
            mat1="Tüm Platformlardan Erişim İmkanı"
            mat2="1 Yıl Sınırsız Erişim"
            percentMonth="%38"
            percentYear="%20"
            lastPriceMonth="54,99₺"
            lastPriceYear="500₺"
            nowPriceMonth="49,99"
            currency="₺"
            personel={false}
          />
        </div>
      </div>
    </>
  );
}

export default Section2;
