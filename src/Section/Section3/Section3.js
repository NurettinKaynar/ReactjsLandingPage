import React from "react";
import "./section3Style.css";
import LineContent from "../../assets/img/line-content.svg";
import ContentImage from "../../assets/img/content-image.svg";
import Accordion from "../../components/SSS/Accordion";
const Section3 = () => {
  return (
    <div id="sss" className="frequentlyAsked">
      <div className="frequentlyAsked__content">
        <div className="frequentlyAsked__content__line" />
        <div className="frequentlyAsked__content__header">
          <h2 className="frequentlyAsked__content__heading">
            Bu Eğitim Sana Ne Katacak?
          </h2>
          <p className="frequentlyAsked__content__text">
            Photoshop eğitimi sana tasarım için temel bilgi ve yetenekleri
            kazandırırken, dünyaya ve bakış açını değiştirecek. Kim bilir, belki
            de yeni bir kariyere doğru ilk adımlarını atacaksın.
          </p>
          <img src={LineContent} alt="" />
        </div>
        <div className="frequentlyAsked__content__description">
          <img
            className="frequentlyAsked__content__image"
            src={ContentImage}
            alt=""
          />
          <Accordion className="frequentlyAsked__content__accordion" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
