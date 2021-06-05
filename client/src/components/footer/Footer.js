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
                src={"https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/106895025_2653565428297476_7292329236160398431_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ixpp5roqb30AX-airUi&_nc_ht=scontent.fsgn2-5.fna&oh=1bbdd22246799a5a3116aac4ea70a10a&oe=60BE4614"}
                alt=""
                height={"30px"}
                width={"30px"}
              />
                <h2>Nguyễn Ngọc Hưng</h2>
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
                  nguyenngochung.work@gmail.com
                </li>
              </ul>
            </div>
            {/* <div id="map"></div> */}
          </div>
          <div className="footer-bottom">@Nguyen Ngoc Hung</div>
        </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
