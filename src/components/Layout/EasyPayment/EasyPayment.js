import React from "react";
import styles from "./EasyPayment.module.css";

export const EasyPayment = () => {
    return (
        <React.Fragment>
            <div className={`${styles.paymentContainer} col-12 d-inline-block`}>
                <div className={`${styles.paymentTextBox} col-md-6 d-inline-block`}>
                    <div className={`${styles.invoicingContent} d-inline-flex flex-column`}>
                        <h2 className={`${styles.invoicingTitle} col-12 d-inline-block`}>Easy Payment to borrow free get a better filling at home</h2>
                        <div className="bar"></div>
                        <p className={`${styles.invoicingSubText} col-12 d-inline-block`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip.</p>
                        <span className={`${styles.invoicingBtn} d-inline-flex align-items-center`}>Get Started</span>
                    </div>
                </div>
                <div className={`${styles.paymentImageBox} col-md-6 d-inline-block`}>
                    <div className={`${styles.invoicingImage} col-12 position-relative d-inline-block`}>
                        <div className={`${styles.desktopImage} position-relative`}>
                            <img src="assets/img/invoicing-image/invoicing1.png" alt="image" className={`${styles.mainImage} wow animate__animated animate__zoomIn`}/>
                            <img src="assets/img/invoicing-image/invoicing2.png" alt="image" className="wow animate__animated animate__fadeInLeft"/>
                            <img src="assets/img/invoicing-image/invoicing3.png" alt="image" className="wow animate__animated animate__fadeInLeft"/>
                            <img src="assets/img/invoicing-image/invoicing4.png" alt="image" className="wow animate__animated animate__fadeInRight"/>
                        </div>
                        <div className="main-mobile-image">
                            <img src="assets/img/invoicing-image/main-pic.png" alt="image" className="wow animate__animated animate__zoomIn"/>
                        </div>
                        <div className="circle-image">
                            <img src="assets/img/invoicing-image/circle1.png" alt="image"/>
                            <img src="assets/img/invoicing-image/circle2.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}