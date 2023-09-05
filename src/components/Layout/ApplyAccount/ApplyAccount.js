import React from "react";
import styles from "./ApplyAccount.module.css";

export const ApplyAccount = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.applyAccountBox} col-12 d-inline-block position-relative`}
      >
        <div className="container">
          <div
            className={`${styles.accountContent} col-12 d-inline-flex align-items-center justify-content-center flex-column`}
          >
            <h2
              className={`${styles.accountTitle} text-uppercase mb-0 col-12 text-center`}
            >
              Apply for an account in minutes
            </h2>
            <p className={`${styles.accountSubText} mb-0 col-12 text-center`}>
              Get your Klob account today!
            </p>
            <span
              className={`${styles.ApplyAccountBtn} position-relative d-inline-flex align-items-center`}
            >
              Get Your Klob Account
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
