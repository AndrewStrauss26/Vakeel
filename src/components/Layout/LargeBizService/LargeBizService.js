import React from "react";
import styles from "../FreeLanceServices/FreeLanceServices.module.css";
import serviceImg from "../../../assets/images/1.png";
import serviceCircle from "../../../assets/images/circle.png";

export const LargeBizService = () => {
    return (
        <React.Fragment>
            <div className={`${styles.servicesContainer} col-12 d-inline-block`}>
                <div className="col-12 d-inline-flex flex-wrap">
                    <div className={`${styles.overviewContent} col-md-6`}>
                        <div className={`${styles.overViewText} ${styles.leftText}`}>
                            <h2 className={`${styles.overviewTitle} m-0 col-12 d-inline-block`}>Small- to medium-sized businesses</h2>
                            <div className={styles.progressBar}></div>
                            <p className={`${styles.overviewDesc} m-0 col-12 d-inline-block`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className={`${styles.servicesList} col-12 d-inline-flex flex-wrap`}>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                                <span className={`${styles.servicesRow} d-inline-flex align-items-center
                                `}><i className={`${styles.servceIcon} flaticon-check-mark`}></i> Free plan available</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.overviewImage} text-center col-md-6 position-relative`}>
                        <img src={serviceImg} alt="image" className={`${styles.serviceImg} position-relative`}/>
                        <div className={`${styles.circleImg} position-absolute col-12`}>
                            <img src={serviceCircle} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}