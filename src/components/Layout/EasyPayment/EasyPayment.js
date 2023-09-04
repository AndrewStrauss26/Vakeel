import React from "react";
import styles from "./EasyPayment.module.css";
import MainPic from "../../../assets/images/main-pic.png";
import circle1 from "../../../assets/images/circle1.png";
import circle2 from "../../../assets/images/circle2.png";

export const EasyPayment = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.paymentContainer} col-12 d-inline-flex flex-wrap align-items-center`}
      >
        <div className={`${styles.paymentTextBox} col-md-6 d-inline-block`}>
          <div className={`${styles.invoicingContent}`}>
            <h2 className={`${styles.invoicingTitle} col-12 d-inline-block`}>
              Easy Payment to borrow free get a better filling at home
            </h2>
            <div className={styles.progressBar}></div>
            <p className={`${styles.invoicingSubText} col-12 d-inline-block`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <span
              role="button"
              className={`${styles.invoicingBtn} d-inline-flex align-items-center position-relative`}
            >
              Get Started
            </span>
          </div>
        </div>
        <div
          className={`${styles.paymentImageBox} position-relative col-md-6 d-inline-block`}
        >
          <div
            className={`${styles.invoicingImage} col-12 position-relative d-inline-block`}
          >
            <div
              className={`${styles.desktopImage} col-12 d-inline-block position-relative`}
            >
              <img
                src={MainPic}
                alt={MainPic}
                className="wow animate__animated animate__zoomIn col-12 d-inline-block"
              />
            </div>
            <div className={`${styles.mainMobileImage}`}>
              <img
                src={MainPic}
                alt={MainPic}
                className="wow animate__animated animate__zoomIn"
              />
            </div>
            <div
              className={`${styles.circleImage} position-absolute d-inline-block`}
            >
              <img src={circle1} className={styles.circle1} alt={circle1} />
              <img src={circle2} className={styles.circle2} alt={circle2} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
