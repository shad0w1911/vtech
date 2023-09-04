import React from "react";
import trustPilot from "../assets/ratings/trustpilot.png";
import clutch from "../assets/ratings/clutch-3.png";
import google from "../assets/ratings/google.png";
import themanifest from "../assets/ratings/themanifest.png";
import { Col, Row } from "reactstrap";

const Ratings = () => {
  return (
    <>
      <Row>
        <Col className="rating-img-holder">
          <img src={trustPilot} alt="trustPilot" className="img-fluid" />
        </Col>
        <Col className="rating-img-holder">
          <img src={clutch} alt="clutch" className="img-fluid" />
        </Col>
        <Col className="rating-img-holder">
          <img src={google} alt="google" className="img-fluid" />
        </Col>
        <Col className="rating-img-holder">
          <img src={themanifest} alt="themanifest" className="img-fluid" />
        </Col>
      </Row>
    </>
  );
};

export default Ratings;
