import React from "react";
import offer1 from "../assets/images/o1.jpg"
import offer2 from "../assets/images/o2.jpg"

const Offer = () => {
  return (
    <div id="Offer" className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={offer1} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Tasty Thursdays</h5>
                  <h6>
                    <span>20%</span> Off
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6  ">
              <div className="box ">
                <div className="img-box">
                  <img src={offer2} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Pizza Days</h5>
                  <h6>
                    <span>15%</span> Off
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
