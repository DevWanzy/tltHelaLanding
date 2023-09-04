import React, { Fragment } from 'react';
import { Card, Col, Row } from "react-bootstrap";

const MissionVission = () => {

  const missionSection = [
    {
      title: 'Mission',
      icon: 'fas fa-compass',
      desc: 'Lorem ipsum dolor sit amet. Ab aspernatur porro eos quod ullam .'
    },
    {
      title: 'Vision',
      icon: 'fas fa-lightbulb',
      desc: 'Lorem ipsum dolor sit amet. Ab aspernatur porro eos quod ullam .'
    },
    {
      title: 'Objective',
      icon: 'fas fa-handshake',
      desc: 'Lorem ipsum dolor sit amet. Ab aspernatur porro eos quod ullam .'
    }
  ];

  return (
    <Fragment>
      <div className="bg-white py-3">
        <Row className="justify-content-center mx-0">
          {missionSection.map((item, i) =>
            <Col key={i} md='4' style={{ maxWidth: 350 }} className="d-flex">
              <Card className="w-100 bg-light rounded-3 border border-secondary border-opacity-25 mb-md-0">
                <Card.Body>
                  <i className={`${item.icon} fs-2`} />
                  <h3>
                    {item.title}
                  </h3>

                  <p className="fs-5 mb-0">
                    {item.desc}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    </Fragment>
  );
};

export default MissionVission;