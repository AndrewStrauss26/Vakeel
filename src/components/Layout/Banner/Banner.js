import React from "react";
import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <React.Fragment>
            <div className={`${styles.bannerContainer} col-12 d-inline-block`}>
                <div className="container h-100">
                    <div className={`h-100 col-12 d-inline-flex align-items-center`}>
                        <div className={`${styles.bannerWrapper} d-inline-flex align-items-start flex-column col-md-5`}>
                            <h1 className={`${styles.bannerTitle} m-0 col-12 d-inline-block`}>Easy, fee-free banking for entrepreneurs</h1>
                            <p className={`${styles.bannerSubText} m-0 col-12 d-inline-block`}>Get the financial tools and insights to start, build, and grow your business.</p>
                            <span className={`${styles.bannerBtn} text-uppercase d-inline-flex align-items-center justify-content-center position-relative`} role="button">Get Started</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}