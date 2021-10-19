import React, { useState } from "react";
import "./section01Style.css";
import Trailer from "../../assets/video/trailer001.mp4";
import Play from "../../assets/img/play-button.svg";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

function Section01() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="vimeo"
        autoplay={true}
        loop={true}
        isOpen={isOpen}
        videoId="538606976"
        onClose={() => setIsOpen(false)}
        modalVideoInner
      />
      <div id="learn" className="first__section">
        <div className="first__section__content">
          <div className="first__section__left">
            <h2 className="first__section__header">Photoshop</h2>
            <p className="first__section__altText">
              Öğrenmenin En Eğlenceli Yolu
            </p>
            <p className="first__section__description">
              Fotoğraflar ya da resimler üzerinde neler yapabileceğini görünce
              keşke bu paketi daha önceden alsaydım diyeceksin. Merak etme,
              içeride çok daha fazlası var. Tek yapman gereken en aşağıdaki sana
              uygun butona basmak.
            </p>
          </div>
          <div className="first__section__right">
            <div onClick={() => setIsOpen(true)} className="video">
              <img className="play__button" src={Play} alt="" />
              <video autoPlay loop muted>
                <source src={Trailer} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section01;
