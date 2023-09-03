import React from "react";
import styles from "./CompareUs.module.css";

export const CompareUs = () => {
    return (
        <React.Fragment>
            <div className={`${styles.compareContainer} col-12 d-inline-block`}>
                <div className="container">
                    <div className={`${styles.compareAreaBox} col-12 d-inline-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${styles.compareTitle} col-12 text-center m-0`}>Compare us with others</h2>
                        <div className={styles.progressBar}></div>
                        <p className={`${styles.compareSubText} col-12 text-center d-inline-block m-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={`${styles.comparisonsTable} col-12 table-responsive`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Packages</th>
                                    <th scope="col">Freelancer</th>
                                    <th scope="col">Householder</th>
                                    <th scope="col">Business Man</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Control payout timing</td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                </tr>
                                <tr>
                                    <td>Transparent payouts</td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-cancel"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                </tr>
                                <tr>
                                    <td>Automate evidence submission</td>
                                    <td><i className="flaticon-cancel"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                </tr>
                                <tr>
                                    <td>Collaboration notes</td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-cancel"></i></td>
                                    <td><i className="flaticon-cancel"></i></td>
                                </tr>
                                <tr>
                                    <td>Deposit tagging</td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-cancel"></i></td>
                                </tr>
                                <tr>
                                    <td>Technical support over IRC</td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                </tr>
                                <tr>
                                    <td>24×7 support</td>
                                    <td><i className="flaticon-cancel"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                    <td><i className="flaticon-check-mark"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}