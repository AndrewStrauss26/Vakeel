import React from "react";
import CountUp from "react-countup";
import styles from "./FunFact.module.css";

export const FunFact = () => {
  return (
    <React.Fragment>
      <div className={`${styles.funfactArea} col-12 d-inline-block`}>
        <div className="container">
          <div
            className={`${styles.FeatureContainer} col-12 d-inline-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className={`${styles.compareTitle} col-12 text-center m-0`}>
              Our Features
            </h2>
            <div className={styles.progressBar}></div>
            <p
              className={`${styles.compareSubText} col-12 text-center d-inline-block m-0`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            className={`${styles.featureCounter} col-12 d-inline-flex align-items-center flex-wrap`}
          >
            <div
              className={`${styles.featureCounterBox} d-inline-flex flex-column align-items-center`}
            >
              <div
                className={`${styles.funCounter} d-inline-flex align-items-center`}
              >
                <CountUp end={180} duration={5} />K
              </div>
              <label className={`${styles.funfactLabel} col-12 text-center`}>
                Downloaded
              </label>
            </div>
            <div
              className={`${styles.featureCounterBox} d-inline-flex flex-column align-items-center`}
            >
              <div
                className={`${styles.funCounter} d-inline-flex align-items-center`}
              >
                <CountUp end={20} duration={5} />K
              </div>
              <label className={`${styles.funfactLabel} col-12 text-center`}>
                Feedback
              </label>
            </div>
            <div
              className={`${styles.featureCounterBox} d-inline-flex flex-column align-items-center`}
            >
              <div
                className={`${styles.funCounter} d-inline-flex align-items-center`}
              >
                <CountUp end={500} duration={5} />+
              </div>
              <label className={`${styles.funfactLabel} col-12 text-center`}>
                Workers
              </label>
            </div>
            <div
              className={`${styles.featureCounterBox} d-inline-flex flex-column align-items-center`}
            >
              <div
                className={`${styles.funCounter} d-inline-flex align-items-center`}
              >
                <CountUp end={70} duration={5} />+
              </div>
              <label className={`${styles.funfactLabel} col-12 text-center`}>
                Contrubutors
              </label>
            </div>
          </div>
          <div className="col-12 d-inline-flex justify-content-center">
            <div
              className={`${styles.contactCtaBox} d-inline-flex align-items-center`}
            >
              <div className="d-inline-flex flex-grow-1 flex-column align-items-start">
                <h3 className={`${styles.ctaTitle} col-12 d-inline-block`}>
                  Have any question about us?
                </h3>
                <p className={`${styles.ctaAbout} m-0 col-12 d-inline-block`}>
                  Don't hesitate to contact us
                </p>
              </div>
              <span
                role="button"
                className={`${styles.contactNowBtn} d-inline-flex align-items-center position-relative`}
              >
                Get Started
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
