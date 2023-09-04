import React, { Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import partnerLogo from 'assets/images/partners/ajira.svg';


const Ajira = props => {
  return (
    <Fragment>
      <div id='ajira' className="bg-white py-4">
        <Container>

          <Row className="mt-4">
            <Col lg='3' className="text-center">
              <img
                src={partnerLogo}
                height={70}
              />

              <ul className="list-unstyled d-flex justify-content-center mb-2">
                <li className="ms-2">
                  <a href="#" className="text-secondary" target="_blank" rel="noreferrer">
                    <i className='bx bxl-facebook fs-4 p-1' />
                  </a>
                </li>
                <li className="ms-2">
                  <a href="#" className="text-secondary" target="_blank" rel="noreferrer">
                    <i className='bx bxl-youtube fs-4 p-1' />
                  </a>
                </li>
                <li className="ms-2">
                  <a href="#" className="text-secondary" target="_blank" rel="noreferrer">
                    <i className='bx bxl-whatsapp fs-4 p-1' />
                  </a>
                </li>
              </ul>

            </Col>

            <Col lg='9'>

              <h3 className="text-black fw-bolder">
                About Ajira
              </h3>

              <p className="text-black fs-5">
                The program seeks to position Kenya as a choice labour destination for multinational companies as well as encourage local companies and public sector to create digital work. The government digitization projects already create lots of viable micro work that can be completed by digital workers.
                <br></br>
                Access to digital work will build wealth and grow the middle class across the country. A larger middle class means more opportunities for businesses and direct growth of GDP.
              </p>

              <p className="fs-5 text-black border-start border-dark border-3 ps-3 py-2">
                The main objectives are to raise the profile of digital work; Promote a mentorship and collaborative learning approach to finding digital work; Provide Kenyans with access to digital work, and finally Promote Kenya as a destination for online workers.
              </p>
            </Col>

          </Row>

        </Container>
      </div>
    </Fragment>
  );
};

export default Ajira;