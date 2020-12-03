// import React, { useEffect, useRef } from 'react'
// import './Info.css'
// import { TimelineLite, TweenMax, Power3 } from 'gsap'
// import imgGirl from '../../images/girl.webp'
// import imgBoy from '../../images/boy.webp'
// import arrow from '../../images/arrow-right.svg'

// const Info = () => {
//     let app = useRef(null)
//     let images = useRef(null)
//     let content = useRef(null)
//     let tl = new TimelineLite({ delay: .8 });

//     useEffect(() => {
//         // Images Vars
//         const girlImage = images.firstElementChild; // or children[0]
//         const boyImage = images.lastElementChild;

//         //content vars
//         const headlineFirst = content.children[0].children[0];
//         const headlineSecond = headlineFirst.nextSibling;
//         const headlineThird = headlineSecond.nextSibling;
//         const contentP = content.children[1];
//         const contentButton = content.children[2];

//         //Remove initial flash
//         TweenMax.to(app, 0, { css: { visibility: 'visible' } })

//         //Images Animation
//         tl.from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, .2)
//             .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

//         //Content Animation
//         tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
//             y: 44,
//             ease: Power3.easeOut,
//             delay: .8
//         }, .15, 'Start')
//             .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
//             .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

//     }, [tl])
//     return (
//         <div className="hero" ref={el => app = el}>
//             <div className="container">
//                 <div className="hero-inner">
//                     <div className="hero-content">
//                         <div className="hero-content-inner" ref={el => content = el}>
//                             <h1>
//                                 <div className="hero-content-line">
//                                     <div className="hero-content-line-inner">Relieving the burden</div>
//                                 </div>
//                                 <div className="hero-content-line">
//                                     <div className="hero-content-line-inner">of disease caused</div>
//                                 </div>
//                                 <div className="hero-content-line">
//                                     <div className="hero-content-line-inner">by behaviors.</div>
//                                 </div>
//                             </h1>
//                             <p>
//                                 Better treats serious cardiometabolic diseases to transform
//                                 lives and reduce healthcare utilization through the use of
//                                 digital therapeutics.
//                             </p>
//                             <div className="btn-row">
//                                 <button className="explore-button">Explore
//                               <div className="arrow-icon">
//                                         <img src={arrow} alt="row" />
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="hero-images">
//                         <div ref={el => images = el} className="hero-images-inner">
//                             <div className="hero-image boy">
//                                 <img src={imgBoy} alt="boy" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Info

import React, { useEffect, useRef, useState } from "react";
import imgGirl from "../../images/girl.webp";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import "./Info.css";
import arrow from "../../images/arrow-right.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
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

            {/* <div className="ImgWrap">
                            <img className='ImgInfos' src='https://images.pexels.com/photos/5202010/pexels-photo-5202010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        </div> */}
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
