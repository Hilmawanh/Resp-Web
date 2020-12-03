import React, { useEffect, useRef, useState } from "react";
import "./Info.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const InfoSections = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="InfoContainer" id="Info">
      <div className="InfoWrapper">
        <div className="InfoRow">
          <div className="Column1">
            <div className="TextWrapper">
              <h1 className="Heading" data-aos="fade-right">
                Relieving the burden of disease caused by behaviors.
              </h1>

              <p className="Subtitle" data-aos="fade-right">
                Better treats serious cardiometabolic diseases to transform lives and reduce healthcare utilization
                through the use of digital therapeutics
              </p>

              <div className="BtnWrap">
                <button className="buttonInfo">
                  Explore
                  <IoIosArrowRoundForward className="Arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="Column2">
            <div className="ImgWrap" data-aos="fade-up">
              <img
                className="ImgInfo"
                alt="a"
                src="https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSections;
