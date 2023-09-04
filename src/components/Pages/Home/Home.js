import React from "react";
import { Header } from "../../Layout/Header/Header";
import { Banner } from "../../Layout/Banner/Banner";
import { Feature } from "../../Layout/Feature/Feature";
import { FreeLanceServices } from "../../Layout/FreeLanceServices/FreeLanceServices";
import { SmallBizService } from "../../Layout/SmallBizService/SmallBizService";
import { LargeBizService } from "../../Layout/LargeBizService/LargeBizService";
import { CompareUs } from "../../Layout/CompareUs/CompareUs";
import { OurFeatures } from "../../Layout/OurFeatures/OurFeatures";
import { EasyPayment } from "../../Layout/EasyPayment/EasyPayment";
import { FunFact } from "../../Layout/FunFact/FunFact";
import { FeedBack } from "../../Layout/FeedBack/FeedBack";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Feature />
      <FreeLanceServices />
      <SmallBizService />
      <LargeBizService />
      <CompareUs />
      <OurFeatures />
      <EasyPayment />
      <FunFact />
      <FeedBack />
    </React.Fragment>
  );
};
