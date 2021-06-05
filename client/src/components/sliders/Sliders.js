import SimpleImageSlider from "react-simple-image-slider";

import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Sliders() {
    const images = [
        // { url: "//laz-img-cdn.alicdn.com/images/ims-web/TB1LjDOzbj1gK0jSZFuXXcrHpXa.jpg_1200x1200.jpg"},
        // { url: "//laz-img-cdn.alicdn.com/images/ims-web/TB1LjDOzbj1gK0jSZFuXXcrHpXa.jpg_1200x1200.jpg"},
        { url: "https://icms-image.slatic.net/images/ims-web/a448c494-cce1-4593-8954-8a7983d2e9ce.jpg"},
        { url: "https://icms-image.slatic.net/images/ims-web/6cdafe00-6fa2-47c3-a418-c0a66540920a.jpg_1200x1200.jpg" },
        { url: "https://icms-image.slatic.net/images/ims-web/86b8f94e-5f40-4c9e-894a-e9d48e298d16.jpg" },
        { url: "https://pages.lazada.vn/wow/i/vn/LandingPage/flashsale?spm=a2o4n.home.top.dbr10.19056afeYY20tV&wh_weex=true&amp;wx_navbar_transparent=true&amp;scm=1003.4.icms-zebra-5000379-2586943.OTHER_5987515512_4958011&skuIds=589192097,1098584021,879148480,1058412717,973474584,279736911,258087309&scm=1003.4.icms-zebra-5000379-2587043.OTHER_6044078732_7363671" },
      ];
      const slideImages = [
        "https://icms-image.slatic.net/images/ims-web/a448c494-cce1-4593-8954-8a7983d2e9ce.jpg",
        "https://icms-image.slatic.net/images/ims-web/6cdafe00-6fa2-47c3-a418-c0a66540920a.jpg_1200x1200.jpg" ,
        "https://icms-image.slatic.net/images/ims-web/86b8f94e-5f40-4c9e-894a-e9d48e298d16.jpg",
        "https://icms-image.slatic.net/images/ims-web/bba7cfa3-2b40-4184-b743-2a85b1f75218.jpg"
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
