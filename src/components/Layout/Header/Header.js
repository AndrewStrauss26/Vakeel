import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../assets/images/logo.png";

export const Header = () => {
    return (
        <React.Fragment>
            <div className={`${styles.headerRow} position-absolute top-0 start-0 end-0 col-12 d-inline-block`}>
                <div className="container">
                    <div className={`${styles.headerContainer} col-12 d-inline-flex justify-content-between`}>
                        <div className={`${styles.headerLogo} d-inline-flex align-items-center`}>
                            <img src={Logo} alt="Site Logo"/>
                        </div>
                        <div className={`${styles.RightNavLinks} d-inline-flex justify-content-end`}>
                            <span className={`${styles.siteLink} d-inline-block`} role="button">Home</span>
                            <span className={`${styles.siteLink} d-inline-block`} role="button">About Us</span>
                            <span className={`${styles.siteLink} d-inline-block`} role="button">Features</span>
                            <span className={`${styles.siteLink} d-inline-block`} role="button">Pricing</span>
                            <span className={`${styles.siteLink} d-inline-block`} role="button">Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};