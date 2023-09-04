import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import tableRes from "../assets/portfolio/hotelRes.jpg";
import invesSoc from "../assets/portfolio/mobApp3.png";
import boating from "../assets/portfolio/boating.jpg";
import matApp from "../assets/portfolio/matrimonial.png";
import stock from "../assets/portfolio/stock.jpg";
import data from "../assets/portfolio/data.jpg";
import web1 from "../assets/portfolio/web1.jpg";
import mobApp from "../assets/portfolio/mobApp4.png";
import web2 from "../assets/portfolio/web2.webp";
import soft1 from "../assets/portfolio/soft2.png";
import chatApp from "../assets/portfolio/chatApp.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import Ratings from "../components/ratings";
import transition from "../components/transitions";

const Portfolio = () => {
  return (
    <Container fluid="true">
      <div className="portfolio-banner-wrapper">
        <div className="portfolio-banner">
          <Container>
            <div className="portfolio-banner-content">
              <div>
                <p className="heading">PORTFOLIO</p>
              </div>
              <div>
                <p className="link">
                  <span className="active">Home </span>/ Portfolio
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container className="portfolio-content-wrapper">
        <p className="portfolio-heading">V-Tech Portfolio</p>
        <p className="portfolio-text">
          Many representatives of modern business who actively use modern
          technology are faced with such an important task as choosing a
          reliable IT partner. Our software house portfolio, place letters and
          reviews of recommendation from customers on our websites. Demand
          creates supply, therefore, companies that develop websites, landing
          pages, online stores or mobile applications are represented on the
          market quite widely. A good IT company considers the development of a
          website, a mobile application through the prism of the client’s
          business tasks. The goal is not just to develop a website, online
          store, mobile application, Search engine optimization and close the
          project, but to create a tool to achieve certain business goals. After
          all, a site, a landing page, a mobile application - all of them have
          their intended purpose and must fulfill a specific task or tasks - to
          stimulate sales, attract new customers, increase brand awareness and
          loyalty.
        </p>
        <br />
        <br />
        <Row>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={boating}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Boat Booking Platform
                </CardTitle>
                <CardText className="portfolio-card-text">
                  The Sailor App is a revolutionary platform that enables users
                  to easily book boat rides and explore exciting water
                  adventures. Designed with convenience in mind, the app allows
                  users to seamlessly reserve boat rides online, make secure
                  payments, and conveniently register for boat rides in advance.
                  Boat owners can leverage the app to effortlessly upload and
                  manage multiple boat rides, while also gaining insights into
                  their earnings and performance.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={invesSoc}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Social Platform for Investors
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Investociety is a global community for investors as their name
                  suggests. Join this community of investors and be part of the
                  community! Engage with your friends and with other investors,
                  discuss stocks and your investments, inform yourself about
                  stocks, read news about stocks and discover new stocks and
                  trading strategies.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={tableRes}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Table Reservation Ipad App
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Restaurant tables booking sometime cause mismanagement now a
                  days, sometimes staff accidently book each table twice that
                  will put you in danger when all other tables on that time are
                  full, here we present “Yiflo” which will manage your
                  restaurant booking for you in a single click, Yiflo not only
                  provide restaurant booking management solution but also
                  provide some more good functionalities.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={matApp}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Matrimonial App
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Introducing a highly recommended and trusted Muslim
                  matchmaking app, catering to individuals in Pakistan, the
                  United Kingdom (UK), the United States of America (USA),
                  Australia, Canada, the United Arab Emirates (UAE), Marrakesh,
                  Saudi Arabia, Qatar, Bahrain, Egypt, Italy, France, Germany,
                  Spain, Belgium, India, Bangladesh, Nepal, and various other
                  countries worldwide. This remarkable Shaadi app offers a
                  platform to connect with verified, sincere, and committed
                  individuals near you or across the globe.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={stock}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Social Stock Website
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Investociety is a global community for investors as their name
                  suggests. Join this community of investors and be part of the
                  community! Engage with your friends and with other investors,
                  discuss stocks and your investments, inform yourself about
                  stocks, read news about stocks and discover new stocks and
                  trading strategies.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={data}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Data Visualization Platform
                </CardTitle>
                <CardText className="portfolio-card-text">
                  InGraphs is a data visualizing website. We have made all type
                  of graphs, interactive maps and texts with image uploading and
                  resizing functionality for InGraphs website. User can create
                  different types charts and maps and show his data in the form
                  of any suitable graph or map. InGraphs have many other 100's
                  of things.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={web1}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Portfolio Website
                </CardTitle>
                <CardText className="portfolio-card-text">
                  A Portfolio Website is your digital showcase, your canvas to
                  tell your story, display your accomplishments, and leave a
                  lasting impression on the online world. It's more than a
                  collection of projects; it's your personal brand, your
                  creative journey, and your professional identity in the
                  digital age.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={mobApp}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Mobile App UI Kit
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Our Mobile App UI Kit is a versatile and indispensable tool
                  for app designers and developers alike. This meticulously
                  crafted kit is designed to simplify and elevate the app design
                  process, allowing you to create visually stunning and highly
                  functional mobile applications effortlessly. Whether you're a
                  seasoned designer or just starting your app development
                  journey, our Mobile App UI Kit is an indispensable resource.
                  It empowers you to create applications that exceed user
                  expectations.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={web2}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  Business Portfolio
                </CardTitle>
                <CardText className="portfolio-card-text">
                  A Portfolio Website is more than just an online resume; it's a
                  dynamic canvas for individuals and businesses to express their
                  unique identity, share their accomplishments, and connect with
                  a global audience. Whether you're an artist, designer,
                  developer, or professional in any field, your portfolio
                  website is a powerful tool for leaving a lasting impression
                  and achieving your goals in the digital age.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={soft1}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">CRM</CardTitle>
                <CardText className="portfolio-card-text">
                  CRM, short for Customer Relationship Management, is a
                  strategic approach, technology, and set of practices that
                  organizations use to manage interactions with current and
                  potential customers. It focuses on building and maintaining
                  strong customer relationships, enhancing customer
                  satisfaction, and ultimately driving business growth and
                  profitability.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={chatApp}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  ONLINE CHATTING APP
                </CardTitle>
                <CardText className="portfolio-card-text">
                  The online chatting app you're describing is a versatile and
                  feature-rich platform designed to facilitate communication and
                  connection between users. The app supports a wide range of
                  multimedia content. Users can send voice notes, enabling them
                  to convey their thoughts and emotions through audio messages.
                  Additionally, they can share videos and pictures, making
                  conversations more expressive and interactive. This feature
                  enhances the user experience and allows for a more engaging
                  form of communication.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="4" lg="4">
            <Card className="portfolio-card-wrapper">
              <CardImg
                alt="Card image cap"
                src={ecommerce}
                className="portfolio-card-img"
              />
              <CardImgOverlay className="portfolio-card-overlay">
                <CardTitle className="portfolio-card-heading">
                  E-Commerce Platform
                </CardTitle>
                <CardText className="portfolio-card-text">
                  FM Shop stands out as an exceptional online retail platform,
                  offering a wide array of products that cater to your diverse
                  needs. This note elaborates on the key features and processes
                  that make FM Shop your go-to website for seamless online
                  shopping. FM Shop is your one-stop online destination for a
                  diverse range of products. With its user-friendly interface,
                  secure ordering process, and commitment to customer
                  satisfaction, it ensures a hassle-free shopping experience.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Ratings />
      </Container>
      <br />
    </Container>
  );
};

export default transition(Portfolio);
