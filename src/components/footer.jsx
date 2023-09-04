import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import facebook from "../assets/social/facebook.png";
import linkedin from "../assets/social/linkedin.png";
import gplus from "../assets/social/google-plus.png";
import twitter from "../assets/social/twitter.png";
import whatsapp from "../assets/social/whatsapp.png";
import clutch from "../assets/ratings/clutch.PNG";
import trustPilot from "../assets/ratings/trustpilot.png";
import logo from "../assets/logoWhite.png";

const Footer = () => {
  return (
    <Container fluid="true" className="footer">
      <Container className="holder">
        <Row>
          <Col lg md>
            <div>
              <h6>GET IN TOUCH</h6>
              <div className="line"></div>
            </div>
            <div className="socials">
              <p>Contact Us!</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="mail@example.com"
                    className="footer-input"
                  />
                  <button className="footer-btn">SEND</button>
                </div>
              </form>
            </div>
            <div>
              <img src={clutch} alt="clutch reviews" className="clutch" />
            </div>
          </Col>
          <Col lg md>
            <div>
              <h6>FOLLOW US</h6>
              <div className="line"></div>
              <div className="socials">
                <img className="socialIcon" src={facebook} alt="Facebook" />
                <img className="socialIcon m-1" src={twitter} alt="Twitter" />
                <img className="socialIcon" src={gplus} alt="Google Plus" />
                <img className="socialIcon m-1" src={linkedin} alt="linkedIn" />
                <img className="socialIcon" src={whatsapp} alt="WhatsApp" />
              </div>
            </div>
            <div>
              <img
                src={trustPilot}
                alt="trust pilot reviews"
                className="trustPilot img-thumbnail"
              />
            </div>
          </Col>
          <Col lg>
            <div>
              <img
                src={logo}
                alt="V Tech Logo"
                className="img-fluid footer-logo"
              />
            </div>
            <div className="footer-details">
              <p>
                <span>Phone Number:</span> +92-514-592013
              </p>
              <p>
                <span>Mobile Number:</span> +92-305-2213261
              </p>
              <p>
                <span>Address:</span> Suite 603, 7th Floor, Al Samad Tower,
                Gulshan-e-Iqbal, Karachi, Pakistan.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <div className="secondary-footer">
          <Row className="content">
            <Col>
              <p>
                COPYRIGHT © 2015 - 2023 <span className="primary">VTECHⓇ</span>
              </p>
              {/* <p style={{ display: "none" }}>
                Designed and Developed by{" "}
                <a href="www.instagram.com/hassaan_uddin_sheikh">
                  Hassan Uddin Sheikh
                </a>
              </p>*/}
            </Col>
            <Col lg md>
              <ul className="secondary-nav">
                <li className="nav-item">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/portfolio"}>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contact_us"}>Contact Us</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
