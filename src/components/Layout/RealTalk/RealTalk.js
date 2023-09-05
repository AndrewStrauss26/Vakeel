import React from "react";
import styles from "./RealTalk.module.css";

export const RealTalk = () => {
  return (
    <React.Fragment>
      <div className={`${styles.realTalkBox} col-12 d-inline-block`}>
        <div className="container">
          <div
            className={`${styles.readyContent} col-12 d-inline-flex align-items-center justify-content-center flex-column`}
          >
            <h3
              className={`${styles.readyTalkTitle} justify-content-center text-capitalize m-0 col-12 d-inline-flex`}
            >
              Ready to talk?
            </h3>
            <p
              className={`${styles.readyTalkDesc} justify-content-center m-0 col-12 d-inline-flex`}
            >
              Our team is here to answer your question about Klob
            </p>
            <div className="col-12 d-inline-flex justify-content-center align-items-center">
              <span
                className={`${styles.talkBtn} d-inline-flex align-items-center position-relative`}
              >
                Contact Us
              </span>
              <span
                className={`${styles.talkLink} text-underline d-inline-flex`}
              >
                Or, get started now with a free trial
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
