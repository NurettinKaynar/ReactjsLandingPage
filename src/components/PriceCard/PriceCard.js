import React from "react";
import "./PriceCard.css";
const PriceCard = (props) => {
  return (
    <div className="price__card">
      <div className="price__card__item__personel">
        <div
          className={props.personel ? "price__topBanner" : "price__recommended"}
        >
          <img src={props.topBannerImage} alt="" />
        </div>
        <div className="price__content__title">
          <div className="price__altTitle">{props.title} </div>
          <div className="price__altTitleDesc"> {props.altText} </div>
        </div>
        <div className="price__content__desc">
          <div className="price__matter">
            <span className="price__matter__icon__bg"></span>
            <span className="price__matter__icon"></span>
            <span className="price__matter__desc">{props.mat1}</span>
          </div>
        </div>
        <div className="price__content__desc">
          <div className="price__matter">
            <span className="price__matter__icon__bg"></span>
            <span className="price__matter__icon"></span>
            <span className="price__matter__desc">{props.mat2}</span>
          </div>
        </div>
        <div className="price__personel__offer">
          <div className="price__offer">
            <span className="price__offer__text">{props.percentMonth}</span>
          </div>
          <div className="price__personel__month"></div>
          <div className="price__personel__month__value">
            <span className="price__personel__discount">
              {props.lastPriceMonth}
            </span>
            <span className="price__personel__offer__price">
              {props.nowPriceMonth}
            </span>
            <span className="price__personel__offer__price__currency">
              {props.currency}
            </span>
            <span className="price__personel__offer__price__currency__duration">
              /aylık
            </span>
          </div>
        </div>
        <hr style={{ marginTop: "30px", marginBottom: "-35px" }} />
        <div className="price__personel__offer">
          <div className="price__offer" style={{ backgroundColor: "#06396C" }}>
            <span className="price__offer__text" style={{ color: "#fff" }}>
              {props.percentYear}
            </span>
          </div>
          <div className="price__personel__month"></div>
          <div className="price__personel__month__value">
            <span className="price__personel__discount">
              {props.lastPriceYear}
            </span>
            <span
              className="price__personel__offer__price"
              style={{ marginLeft: "20px" }}
            >
              399
            </span>
            <span className="price__personel__offer__price__currency">₺</span>
            <span className="price__personel__offer__price__currency__duration">
              /yıllık
            </span>
          </div>
        </div>
        <div className="price__button">Kayıt Ol</div>
      </div>
    </div>
  );
};

export default PriceCard;
