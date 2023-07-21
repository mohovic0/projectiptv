import React from "react";
import styles from "./Faq.module.css";

function Faq() {
  return (
    <div className="container">

      <h1 className="fs-1 fw-bolder fst-italic mt-5 text-center">FAQ</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">

        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>HOW DOES IT WORK?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              To watch our TV channels FASTIGERIPTV, you must first have a
              stable Internet connection, as well as a Smart device. The Smart
              Devices and Applications we support and you can watch TV channels
              from
                  <ul className="mt-4 ">
                    <li className="mt-2">
                      Smart TV (Samsung, LG, Philips, Panasonic, Grundig)
                    </li>
                    <li className="mt-2">Android Box</li>
                    <li className="mt-2">
                      Android Devices (Including All Devices that they have OS of
                      Android)
                    </li>
                    <li className="mt-2">Mag Boxes (250, 254, etc)</li>
                    <li className="mt-2">Dreamlink (T1, T1+, etc)</li>
                    <li className="mt-2">GSE Smart IPTV Pro</li>
                    <li className="mt-2">Avov Tvonline (N, N2, N3 etc)</li>
                    <li className="mt-2">Enigma</li>
                    <li className="mt-2">STB Emulator</li>
                    <li className="mt-2">iOS Devices (iPhone, iPad)</li>
                    <li className="mt-2">SS-IPTV</li>
                  </ul>
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>WHEN WILL I RECEIVE MY TEST/SUBSCRIPTION CREDENTIALS?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            You will get your file as soon as possible. We will do our best not to let you wait long.
            Your test / subscription will be in your Email as fast as possible.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>

        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>


        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>



        <div className={`accordion-item ${styles.accordionBtn}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              <strong>DOES THIS SERVICE (IPTV) WORK IN MY COUNTRY?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
                IPTV works all over the world, no matter where you live or where you are.
                Since you have a stable Internet connection of 8 MB / s, you will be able
                 to watch thousands of TV channels.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Faq;
