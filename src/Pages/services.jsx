import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import transition from "../components/transitions";
import { useNavigate } from "react-router-dom";
import aso from "../assets/services/aso.webp";
import digital from "../assets/services/digitalMarketing.webp";
import seo from "../assets/services/seo.webp";
import itSol from "../assets/services/itSol.webp";
import crm from "../assets/services/crm.webp";
import webDev from "../assets/services/webDev.webp";
import android from "../assets/services/android.webp";
import ios from "../assets/services/ios.webp";
import graphics from "../assets/services/graphics.webp";

const Services = () => {
  const navigate = useNavigate();

  return (
    <Container fluid="true">
      <div className="services-banner-wrapper">
        <div className="services-banner">
          <Container>
            <div className="services-banner-content">
              <div>
                <p className="heading">SERVICES</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Home </span>/ Services
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="services-content-wrapper">
        <Container>
          <Row>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={webDev} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    Web Development
                  </CardTitle>
                  <CardText className="services-card-description">
                    Our experts create most affordable web design and
                    development services considering the size of every business.
                    We hire the best resources to help you create flexible, user
                    friendly, and trendsetting website in the market.
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={itSol} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    IT Solutions
                  </CardTitle>
                  <CardText className="services-card-description">
                    Our service offerings enhance customer experience throughout
                    secure & highly functional end-to-end warranty management.
                    At V-Tech Solutions, we have a holistic and integrated
                    approach towards core modernization to expe...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={crm} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    CRM Softwares
                  </CardTitle>
                  <CardText className="services-card-description">
                    We set up a CRM based on your activity by defining the
                    indicators that will be important to take into account. You
                    will be able to process and analyze data relating to your
                    customers and define good business planning.
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img
                  alt="Sample"
                  src={graphics}
                  className="services-card-img"
                />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    Graphics Designing
                  </CardTitle>
                  <CardText className="services-card-description">
                    To help you expand your brand reach and build an online
                    presence, we hire the best resources of graphic designers in
                    Pakistan. Our customers’ trust and satisfaction is our top
                    concern. Therefore, we provide top-notch, competitive...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={android} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    Andriod App Development
                  </CardTitle>
                  <CardText className="services-card-description">
                    To kick off your business with mobile app development, we
                    provide custom mobile app development services. We have
                    experts who build cross-platform apps to help you reach your
                    audience online through different devices. Our secu...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={ios} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    iOS App Development
                  </CardTitle>
                  <CardText className="services-card-description">
                    V-Tech Solutions comprises of team of the developers, who
                    create apps for mobile (android and iOS) and desktop. Our
                    team of app developers dwell into your business agenda and
                    strategies and come up with an app, which syrockets y...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={seo} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    SEO
                  </CardTitle>
                  <CardText className="services-card-description">
                    V-Tech Solutions, an SEO agency that offers digital
                    marketing services to get qualitative and targeted traffic
                    to help you achieve your business goals. In V-Tech Solutions
                    our team of experts is here to provide the best SEO Serv...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={aso} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    ASO
                  </CardTitle>
                  <CardText className="services-card-description">
                    The use and analysis of navigation data makes it possible to
                    draw up a portrait of the different profiles of customers
                    interested in your brand or your company. These DATA are
                    therefore precious, because they allow more relevance in...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="4" xs="12">
              <Card className="services-card-wrapper">
                <img alt="Sample" src={digital} className="services-card-img" />
                <CardBody>
                  <CardTitle tag="h5" className="services-card-title">
                    Digital Marketing
                  </CardTitle>
                  <CardText className="services-card-description">
                    We will help you, thus, to achieve commercial success
                    through conversations with Internet users. Only in this way
                    will you seduce even the most skeptical of your targets. It
                    is all the magic of digital marketing, and it is also our...
                  </CardText>
                  <button
                    className="services-card-button"
                    onClick={() => {
                      navigate("/contact_us");
                    }}
                  >
                    Contact Us
                  </button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default transition(Services);
