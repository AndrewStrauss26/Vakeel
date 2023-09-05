import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../../assets/images/logo.png";
import map from "../../../assets/images/map.png";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer
        className={`${styles.footerArea} col-12 position-relative d-inline-block`}
      >
        <div className="container">
          <div
            className={`${styles.footerComponent} col-12 d-inline-flex flex-wrap`}
          >
            <div className={`${styles.singleWidgetBox}`}>
              <div
                className={`${styles.singleFooterWidget} col-12 d-inline-flex flex-column`}
              >
                <div className="logo">
                  <span>
                    <img src={Logo} alt="logo" />
                  </span>
                  <p
                    className={`${styles.siteDesc} mb-0 col-12 d-inline-block`}
                  >
                    Quis ipsum suspendisse ultrices gravida commodo. Risus
                    commodo veliliee vel viverra maecenas accumsan lacus vel
                    facilisis.
                  </p>
                </div>
                <ul className={`${styles.socialLinks} list-unstyled`}>
                  <li>
                    <span>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fab fa-twitter"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fab fa-instagram"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fab fa-linkedin-in"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.singleWidgetBox}`}>
              <div
                className={`${styles.singleFooterWidget} col-12 d-inline-flex flex-column`}
              >
                <h3
                  className={`${styles.footerWidgetTitle} col-12 d-inline-block m-0`}
                >
                  Company
                </h3>
                <ul className={`${styles.footerLinks} col-12 list-unstyled`}>
                  <li>
                    <span>About Us</span>
                  </li>
                  <li>
                    <span>Services</span>
                  </li>
                  <li>
                    <span>Features</span>
                  </li>
                  <li>
                    <span>Our Pricing</span>
                  </li>
                  <li>
                    <span>Latest News</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.singleWidgetBox}`}>
              <div
                className={`${styles.singleFooterWidget} col-12 d-inline-flex flex-column`}
              >
                <h3
                  className={`${styles.footerWidgetTitle} col-12 d-inline-block m-0`}
                >
                  Support
                </h3>
                <ul className={`${styles.footerLinks} col-12 list-unstyled`}>
                  <li>
                    <span>FAQ's</span>
                  </li>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span>Terms &amp; Condition</span>
                  </li>
                  <li>
                    <span>Community</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.singleWidgetBox}`}>
              <div
                className={`${styles.singleFooterWidget} col-12 d-inline-flex flex-column`}
              >
                <h3
                  className={`${styles.footerWidgetTitle} col-12 d-inline-block m-0`}
                >
                  Address
                </h3>
                <ul
                  className={`${styles.footerContactInfo} col-12 list-unstyled`}
                >
                  <li>
                    <strong>Location:</strong>{" "}
                    <span>27 Division St, New York, NY 10002, USA</span>
                  </li>
                  <li>
                    <strong>Email:</strong> <span>Klob@gmail.com</span>
                  </li>
                  <li>
                    <strong>Phone:</strong> <span>+ (321) 984 754</span>
                  </li>
                  <li>
                    <strong>Fax:</strong> <span>+1-212-9876543</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${styles.copyrightArea} col-12 d-inline-block text-center`}
          >
            <p className="col-12 text-center d-inline-block">
              © Klob is Proudly Owned by <span>EnvyTheme</span>
            </p>
          </div>
        </div>
        <div
          className={`${styles.mapImage} position-absolute col-12 d-inline-flex justify-content-center h-100 start-0 top-0 end-0 bottom-0`}
        >
          <img src={map} className="col-12 object-fit-contain" alt="map" />
        </div>
      </footer>
    </React.Fragment>
  );
};
