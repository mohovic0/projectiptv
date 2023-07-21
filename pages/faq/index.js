import React from "react";
import styles from "./Faq.module.css";

function Faq() {
  return (
    <>
      <div className="container accordion accordion-flush" id="accordionFlushExample">
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
              <strong>HOW DOES IT WORK?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item s accordion body. Lets imagine this being filled with
              some actual content.
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
              <strong>HOW DOES IT WORK?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third items accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
