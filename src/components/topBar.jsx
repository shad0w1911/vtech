import React from "react";
import { Col, Container, Row } from "reactstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Container fluid="true" className="topbar">
      <Container lg="6" md="12" xs="12">
        <Row>
          <Col className="info-topbar">
            <div className="my-auto">
              <p>
                <LocationOnIcon className="icon-topbar" /> Karachi, Pakistan
              </p>
            </div>
            <div className="my-auto">
              <p>
                <EmailOutlinedIcon className="icon-topbar" /> info@vtech.com
              </p>
            </div>
            <div className="my-auto">
              <p>
                <LocalPhoneIcon className="icon-topbar" /> +92-305-2213261
              </p>
            </div>
            <div className="my-auto">
              <p>
                <PhoneAndroidIcon className="icon-topbar" /> +92-514-592013
              </p>
            </div>
          </Col>
          <Col>
            <div className="links-topbar">
              <div id="facebook">
                <FacebookIcon className="social-topbar" />
              </div>
              <div id="twitter">
                <TwitterIcon className="social-topbar" />
              </div>
              <div id="google">
                <GoogleIcon className="social-topbar" />
              </div>
              <div id="linkedIn">
                <LinkedInIcon className="social-topbar" />
              </div>
              <div id="whatsapp">
                <WhatsAppIcon className="social-topbar" />
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/contact_us");
                  }}
                  id="topbar-btn"
                >
                  Get A Free Quote
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TopBar;
