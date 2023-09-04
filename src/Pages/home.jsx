import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import transition from "../components/transitions";
import CountUp from "react-countup";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import web from "../assets/animated/web.gif";
import logo from "../assets/icon.png";
import Ratings from "../components/ratings";
import webApp from "../assets/Icons/web-development.png";
import mobileApp from "../assets/Icons/mobile-development.png";
import itSolution from "../assets/Icons/it-solution.png";
import software from "../assets/Icons/custom-software.png";
import graphics from "../assets/Icons/graphics-designing.png";
import security from "../assets/Icons/security.png";
import training from "../assets/Icons/technical-training.png";
import digital from "../assets/Icons/digital-marketing.png";
import portImg from "../assets/background/apps-min.png";
import RecentWorks from "../components/recentWorks";
import ScrollTrigger from "react-scroll-trigger";

const Home = () => {
  const navigate = useNavigate();
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <Container fluid="true">
        {/* Hero */}
        <section className="hero-home">
          <Container>
            <Row>
              <Col md="8" lg="8" className="hero-wrapper">
                <p className="hero-heading3 dark">
                  STEP TOWARDS DIGITALIZATION WITH US
                </p>
                <p className="hero-heading1 primary">IT Solutions,</p>
                <p className="hero-heading2 secondary">Go Digital.</p>
                <p className="hero-text">
                  We Plan, Design and Develop websites, apps and softwares from
                  start to finish.
                </p>
              </Col>
              <Col className="hero-wrapper-images">
                <img src={web} alt="animated web icon" />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Intro */}
        <section className="intro">
          <Container>
            <Row>
              <Col md="2" lg="2" className="logo-holder">
                <img src={logo} alt="logo" className="logo" />
              </Col>
              <Col md lg>
                <h5>
                  Welcome to V-Tech Solutions – Fastest Growing IT Company.
                </h5>
                <p>
                  V-Tech Solutions is an IT Software Company founded in Sep 2015
                  in Pakistan. We are offering multiple services in Website
                  Development, Graphic Designing, Digital Marketing, and Mobile
                  Apps Development. We make CMS, CRM and provide ERP solutions.
                  We have highly experienced web developers who have
                  successfully launched various huge projects and proved their
                  skills in many projects. Our software house is spreading the
                  best services in the industry of IT from last seven years.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Ratings */}
        <section className="home-reviews">
          <Container>
            <Ratings />
          </Container>
        </section>
        {/* Services */}
        <section className="home-banner-wrapper services-bg">
          <Container fluid="true" className="home-services ">
            <h2>OUR SERVICES</h2>
          </Container>
        </section>
        <section>
          <Container>
            <div className="home-services-content">
              <Row>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={itSolution} alt="IT-Solutions" />
                    </div>
                    <p className="home-services-heading">IT Solutions</p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={webApp} alt="Web Development" />
                    </div>
                    <p className="home-services-heading">Web App Development</p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={mobileApp} alt="Mobile App Development" />
                    </div>
                    <p className="home-services-heading">
                      Mobile App Development
                    </p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={graphics} alt="Graphic Designing" />
                    </div>
                    <p className="home-services-heading">Graphic Designing</p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={software} alt="Custom Software Development" />
                    </div>
                    <p className="home-services-heading">
                      Software Development
                    </p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={security} alt="CCTV & Security Systems" />
                    </div>
                    <p className="home-services-heading">
                      CCTV & Security Systems
                    </p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={digital} alt="Digital Marketing" />
                    </div>
                    <p className="home-services-heading">Digital Marketing</p>
                    <Link
                      to={"/services"}
                      className="primary  home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="home-services-card">
                    <div className="home-services-image-holder">
                      <img src={training} alt="Technical Trainings" />
                    </div>
                    <p className="home-services-heading">Technical Trainings</p>
                    <Link
                      to={"/services"}
                      className="primary home-services-button"
                    >
                      Learn More{" "}
                      <ArrowRightAltOutlinedIcon className="home-services-icon" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        {/* Counters */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <section className="home-counters-wrapper counters-bg">
            <Container fluid="true" className="home-counters ">
              <Row className="home-counters-content">
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={16640}
                            duration={2}
                            delay={0}
                          />
                        )}
                        <p className="counter-label">TOTAL WORKING HOURS</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={247} duration={3} delay={0} />
                        )}
                        <p className="counter-label">PROJECTS COMPLETED</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={40} duration={3} delay={0} />
                        )}
                        <p className="counter-label">WEEKLY WORKING HOURS</p>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="home-counters-holder">
                    <div>
                      <p className="counter-number primary">
                        {counterOn && (
                          <CountUp start={0} end={215} duration={3} delay={0} />
                        )}
                        <p className="counter-label">HAPPY CLIENTS</p>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </ScrollTrigger>
        {/* Portfolio */}
        <section className="home-portfolio">
          <Container>
            <div className="home-portfolio-wrapper">
              <img src={portImg} className="img-fluid" alt="portfolio" />
              <div className="home-portfolio-content">
                <h2>
                  This is our Latest <strong>Work</strong>
                </h2>
                <p>
                  You can review some of the projects that were successfully
                  implemented by{" "}
                  <span className="primary">V-Tech Solutions</span>.
                </p>
              </div>
              <RecentWorks />
              <div className="home-portfolio-content-button">
                <button
                  onClick={() => {
                    navigate("/portfolio");
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </Container>
        </section>
        {/* Banner */}
        <section>
          <Container fluid="true" className="home-banner-wrapper portfolio-bg">
            <div className="home-services">
              <h2>
                We are One Stop <strong>Solution Providers</strong>
              </h2>
            </div>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default transition(Home);
