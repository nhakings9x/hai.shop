import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import a from './img/slide-4.jpg';
import b from './img/slide-5.jpg';
import c from './img/slide-6.jpg'
function Sliders() {
      const slideImages = [
        a,
        b ,
        c,
      ];
  return (
      <div>
        <Slide easing="ease">
          {slideImages.map(item => {
            return (
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${item})`,  "backgroundPosition": "center", "backgroundRepeat": "no-repeat","backgroundSize": "cover"}}>
                </div>
              </div>
            )
          })}
        </Slide>
      </div>
  );
}

export default Sliders;
