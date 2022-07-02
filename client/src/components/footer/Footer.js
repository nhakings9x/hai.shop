import React from "react";


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h2>Coders By</h2>
            <div className="wrapper-footer-items">
              <img
                src={"https://scontent.fhph1-1.fna.fbcdn.net/v/t1.6435-9/30743911_810356072493472_5070468545175879680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=Zt3bVdg-mZcAX_63G73&_nc_ht=scontent.fhph1-1.fna&oh=00_AT_uC2isL7YMn2j5sq-T9etOW688Ofq7TRRWFpN7ReB_vw&oe=62E3D920"}
                alt=""
                height={"30px"}
                width={"30px"}
              />
                <h2>Nguyễn Hải Anh</h2>
              </div>
            </div>
            <div className="footer-items">
              <h2>Contact Us</h2>
              <div className="border"></div>
              <ul>
                {/* <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Hà Nội,
                  Việt Nam
                </li> */}
                {/* <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>032 787 4131
                </li> */}
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  haianh.nguyen99nd@gmail.com
                </li>
              </ul>
            </div>
            {/* <div id="map"></div> */}
          </div>
          <div className="footer-bottom">@Nguyen Hai Anh</div>
        </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
