import React from "react";
import styles from "./OurFeatures.module.css";

export const OurFeatures = () => {
    return (
        <React.Fragment>
            <div className={`${styles.ourFeatureBox} col-12 d-inline-block`}>
                <div className="container">
                    <div className={`${styles.FeatureContainer} col-12 d-inline-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${styles.compareTitle} col-12 text-center m-0`}>Our Features</h2>
                        <div className={styles.progressBar}></div>
                        <p className={`${styles.compareSubText} col-12 text-center d-inline-block m-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={`${styles.featureBoxes} col-12 d-inline-flex flex-wrap`}>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.settings} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-settings"></i></div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Incredible infrastructure</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.envelope} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-envelope-of-white-paper"></i></div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Email notifications</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.menu} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-menu"></i></div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Simple dashboard</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.info} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-info"></i></div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Information retrieval</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.cursor} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-cursor"></i></div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Drag and drop functionality</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 flex-shrink-1 px-2">
                            <div className={`${styles.singleFeature} col-12 d-inline-flex flex-column position-relative`}>
                                <div className={`${styles.featureIconBox} ${styles.alarm} d-inline-flex align-items-center justify-content-center`}><i className="flaticon-alarm"></i>
                                </div>
                                <h3 className={`${styles.featureBoxTitle} col-12 d-inline-block mb-0`}>Deadline reminders</h3>
                                <p className={`${styles.featureBoxDesc} col-12 d-inline-block mb-0`}>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut
                                    labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}