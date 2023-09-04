import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./FeedBack.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client1 from "../../../assets/images/client1.jpg";
import Client3 from "../../../assets/images/client3.jpg";
import Client5 from "../../../assets/images/client5.jpg";
import ArrowBack from "../../../assets/images/back.png";
import ArrowNext from "../../../assets/images/next.png";

export const FeedBack = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`${styles.nextArrow} position-absolute slick-arrow`}
      >
        <img src={ArrowNext} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`${styles.prevArrow} position-absolute slick-arrow`}
      >
        <img src={ArrowBack} />
      </button>
    );
  }

  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const sliderRef = useRef();

  return (
    <React.Fragment>
      <div className={`${styles.feedbackArea} col-12 d-inline-block`}>
        <div className="container">
          <div className={`${styles.feedBackContainer} col-12 d-inline-block`}>
            <h2 className={`${styles.invoicingTitle} col-12 d-inline-block`}>
              Easy Payment to borrow free get a better filling at home
            </h2>
            <div className={styles.progressBar}></div>
            <p className={`${styles.invoicingSubText} col-12 d-inline-block`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div
              className={`${styles.sliderContainer} col-12 d-inline-flex flex-column align-items-center justify-content-center`}
            >
              <Slider
                ref={sliderRef}
                {...settings}
                className="col-md-8 d-inline-block"
              >
                <div
                  className={`${styles.feedBackSlide} col-12 d-inline-flex align-items-start`}
                >
                  <div
                    className={`${styles.feedbackUser} d-inline-flex align-items-center justify-content-center`}
                  >
                    <img src={Client1} alt={Client1} />
                  </div>
                  <div
                    className={`${styles.clientMesgBox} d-inline-flex flex-column`}
                  >
                    <h3 className={`${styles.clientName} d-inline-flex col-12`}>
                      John Smith
                    </h3>
                    <span
                      className={`${styles.clientDesig} d-inline-flex col-12`}
                    >
                      Web Developer
                    </span>
                    <p className={`${styles.clientMesag} d-inline-flex col-12`}>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.feedBackSlide} col-12 d-inline-flex align-items-start`}
                >
                  <div
                    className={`${styles.feedbackUser} d-inline-flex align-items-center justify-content-center`}
                  >
                    <img src={Client3} alt={Client3} />
                  </div>
                  <div
                    className={`${styles.clientMesgBox} d-inline-flex flex-column`}
                  >
                    <h3 className={`${styles.clientName} d-inline-flex col-12`}>
                      John Smith
                    </h3>
                    <span
                      className={`${styles.clientDesig} d-inline-flex col-12`}
                    >
                      Web Developer
                    </span>
                    <p className={`${styles.clientMesag} d-inline-flex col-12`}>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.feedBackSlide} col-12 d-inline-flex align-items-start`}
                >
                  <div
                    className={`${styles.feedbackUser} d-inline-flex align-items-center justify-content-center`}
                  >
                    <img src={Client5} alt={Client5} />
                  </div>
                  <div
                    className={`${styles.clientMesgBox} d-inline-flex flex-column`}
                  >
                    <h3 className={`${styles.clientName} d-inline-flex col-12`}>
                      John Smith
                    </h3>
                    <span
                      className={`${styles.clientDesig} d-inline-flex col-12`}
                    >
                      Web Developer
                    </span>
                    <p className={`${styles.clientMesag} d-inline-flex col-12`}>
                      Quis ipsum suspendisse ultrices gravida. Risus commodo
                      viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
