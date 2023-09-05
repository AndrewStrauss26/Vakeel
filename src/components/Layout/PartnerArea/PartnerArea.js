import React from "react";
import styles from "./PartnerArea.module.css";
import Partner from "../../../assets/images/partner-hover1.png";

export const PartnerArea = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.partnerArea} d-inline-block col-12 position-relative`}
      >
        <div className="container">
          <h3 className={`${styles.partnerAreaTitle} m-0 col-12 text-center`}>
            More that 1.5 million businesses and organizations use Klob
          </h3>
          <div
            className={`${styles.partnerInner} d-inline-flex align-items-center flex-wrap col-12`}
          >
            <span
              className={`${styles.partnerLogo} justify-content-center align-items-center d-inline-flex`}
            >
              <img src={Partner} alt="partner" />
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
