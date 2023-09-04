import React from "react";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import DefaultValues from "constants/DefaultValues";
import minLogo from "assets/images/ministry-white.svg";


const Footer = () => {

  const talentLinks = [
    { name: 'Music', link: '#' },
    { name: 'Football', link: '#' },
    { name: 'Athletics', link: '#' },
  ];

  const eventLinks = [
    { name: 'Sports', link: '#' },
    { name: 'Music', link: '#' },
    { name: 'Drama', link: '#' },
  ];

  const centerLinks = [
    { name: 'Nairobi', link: '#' }
  ];

  const shopLinks = [
    { name: 'Art', link: '#' },
    { name: 'Music', link: '#' },
    { name: 'Apprell', link: '#' }
  ];


  return (
    <React.Fragment>
      <footer className="footer px-lg-3 pt-5">

        <Row className="text-lg-center flex-column flex-lg-row">
          <Col>
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={DefaultValues?.logo_name_white} alt="" height="50" />
                </span>
                <span className="logo-lg">
                  <img src={DefaultValues?.logo_name_white} alt="" height="50" />
                </span>
              </Link>
            </div>
          </Col>

          <Col>
            <h4>For Talent</h4>

            <ul className="list-unstyled d-flex flex-lg-column mb-2">
              {talentLinks.map((item, i) =>
                <li key={i} className="ms-2 mb-2">
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </Col>

          <Col>
            <h4>Events</h4>

            <ul className="list-unstyled d-flex flex-lg-column mb-2">
              {eventLinks.map((item, i) =>
                <li key={i} className="ms-2 mb-2">
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </Col>

          <Col>
            <h4>Learning Centers</h4>

            <ul className="list-unstyled d-flex flex-lg-column mb-2">
              {centerLinks.map((item, i) =>
                <li key={i} className="ms-2 mb-2">
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </Col>

          <Col>
            <h4>Shop</h4>

            <ul className="list-unstyled d-flex flex-lg-column mb-2">
              {shopLinks.map((item, i) =>
                <li key={i} className="ms-2 mb-2">
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </Col>

          <Col className="d-flex align-items-center justify-content-center flex-lg-column">

            <img
              src={DefaultValues?.playstore}
              width={150}
              className="me-3 me-lg-0 mb-2"
            />

            <img
              src={DefaultValues?.appstore}
              width={150}
              className="me-3 me-lg-0 mb-2"
            />
          </Col>

        </Row>

        <ul className="list-unstyled d-flex mb-2">
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-facebook fs-4 p-1' />
            </a>
          </li>
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-twitter fs-4 p-1' />
            </a>
          </li>
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-linkedin fs-4 p-1' />
            </a>
          </li>
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-instagram fs-4 p-1' />
            </a>
          </li>
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-youtube fs-4 p-1' />
            </a>
          </li>
          <li className="ms-2">
            <a href="#" target="_blank" rel="noreferrer">
              <i className='bx bxl-whatsapp fs-4 p-1' />
            </a>
          </li>
        </ul>

        <hr className="border border-secondary mx-2 my-2" />

        <div className="d-flex"></div>
        <ul className="list-unstyled d-flex mb-2">
          <li className="ms-2">
            Copyright 2023 Talanta Hela. All right reserved
          </li>

          <li className="ms-3">
            <a href="#" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </li>

          <li className="ms-3">
            <a href="#" target="_blank" rel="noreferrer">
              Terms of Use
            </a>
          </li>

        </ul>

        <div className='d-flex'>

          <div className='splash flex-grow-1'>
            <div className='scroll-effect'>
              <div className='line3'></div>
              <div className='line2'></div>
              <div className='line1'></div>
            </div>
          </div>

          <img
            src={minLogo}
            height={70}
            className="my-auto mx-3"
          />
        </div>

      </footer>
    </React.Fragment>
  );
};

export default Footer;
