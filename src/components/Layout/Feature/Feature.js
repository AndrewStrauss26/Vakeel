import React from "react";
import styles from "./Feature.module.css";

export const Feature = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.featureContainer} position-relative col-12 d-inline-block`}
      >
        <div className="container">
          <div
            className={`${styles.featureRowBox} overflow-hidden col-12 d-inline-flex flex-wrap`}
          >
            <div
              className={`${styles.featureBoxes} col-md-3 d-inline-flex flex-column align-items-center justify-content-center position-relative overflow-hidden`}
            >
              <i
                className={`${styles.piggyBank} position-absolute flaticon-piggy-bank`}
              ></i>
              <h3
                className={`${styles.featureBoxTItle} text-center d-inline-block col-12 m-0`}
              >
                Transparent Pricing
              </h3>
              <p className={`${styles.featureDesc} text-center col-12 mb-0`}>
                Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
              </p>
              <span
                className={`${styles.ReadMoreBtn} position-absolute d-inline-block text-decoration-none`}
                role="button"
              >
                Read More
              </span>
            </div>
            <div
              className={`${styles.featureBoxes} col-md-3 d-inline-flex flex-column align-items-center justify-content-center position-relative overflow-hidden`}
            >
              <i
                className={`${styles.encryption} position-absolute flaticon-data-encryption`}
              ></i>
              <h3
                className={`${styles.featureBoxTItle} text-center d-inline-block col-12 m-0`}
              >
                Fully Encrypted
              </h3>
              <p className={`${styles.featureDesc} text-center col-12 mb-0`}>
                Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
              </p>
              <span
                className={`${styles.ReadMoreBtn} position-absolute d-inline-block text-decoration-none`}
                role="button"
              >
                Read More
              </span>
            </div>
            <div
              className={`${styles.featureBoxes} col-md-3 d-inline-flex flex-column align-items-center justify-content-center position-relative overflow-hidden`}
            >
              <i
                className={`${styles.wallet} position-absolute flaticon-wallet`}
              ></i>
              <h3
                className={`${styles.featureBoxTItle} text-center d-inline-block col-12 m-0`}
              >
                Instant Cashout
              </h3>
              <p className={`${styles.featureDesc} text-center col-12 mb-0`}>
                Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
              </p>
              <span
                className={`${styles.ReadMoreBtn} position-absolute d-inline-block text-decoration-none`}
                role="button"
              >
                Read More
              </span>
            </div>
            <div
              className={`${styles.featureBoxes} col-md-3 d-inline-flex flex-column align-items-center justify-content-center position-relative overflow-hidden`}
            >
              <i
                className={`${styles.shield} position-absolute flaticon-shield`}
              ></i>
              <h3
                className={`${styles.featureBoxTItle} text-center d-inline-block col-12 m-0`}
              >
                Safe and Secure
              </h3>
              <p className={`${styles.featureDesc} text-center col-12 mb-0`}>
                Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.
              </p>
              <span
                className={`${styles.ReadMoreBtn} position-absolute d-inline-block text-decoration-none`}
                role="button"
              >
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
