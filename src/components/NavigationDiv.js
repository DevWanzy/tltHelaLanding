import React, { Fragment, useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import classNames from "classnames";

import { Nav, Navbar } from 'react-bootstrap';


const NavigationDiv = props => {

  const [talent, setTalent] = useState(false);
  const [events, setEvents] = useState(false);
  const [learning, setLearning] = useState(false);

  useEffect(() => {
    setTalent(false);
    setEvents(false);
    setLearning(false);
  }, []);


  return (
    <Fragment>
      <Navbar className="d-none d-lg-flex m-auto flex-grow-1">
        <Nav className="ps-3 fs-5 d-flex align-items-center justify-content-center flex-grow-1">

          <li className="nav-item dropdown me-2">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              onClick={e => {
                e.preventDefault();
                setTalent(!talent);
                setEvents(false);
                setLearning(false);
              }}
              to="#"
            >
              For Talent<div className="arrow-down"></div>
            </Link>
            <div
              className={classNames("dropdown-menu", { show: talent })}
            >
              <Link to="#" className="dropdown-item">
                Music
              </Link>
              <Link to="#" className="dropdown-item">
                Football
              </Link>
              <Link to="#" className="dropdown-item">
                Athletics
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown me-2">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              onClick={e => {
                e.preventDefault();
                setEvents(!events);
                setTalent(false);
                setLearning(false);
              }}
              to="#"
            >
              Events<div className="arrow-down"></div>
            </Link>
            <div
              className={classNames("dropdown-menu", { show: events })}
            >
              <Link to="#" className="dropdown-item">
                Sports
              </Link>
              <Link to="#" className="dropdown-item">
                Music
              </Link>
              <Link to="#" className="dropdown-item">
                Drama
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown me-2">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              onClick={e => {
                e.preventDefault();
                setLearning(!learning);
                setTalent(false);
                setEvents(false);
              }}
              to="#"
            >
              Learning Centers<div className="arrow-down"></div>
            </Link>
            <div
              className={classNames("dropdown-menu", { show: learning })}
            >
              <Link to="#" className="dropdown-item">
                Nairobi
              </Link>
            </div>
          </li>

          <Link
            to="#"
            className={classNames('nav-link me-2', {
              active: window.location.pathname === '/'
            })}
          >
            Shop
          </Link>

          <Link
            to="/partners"
            className={classNames('nav-link me-2', {
              active: window.location.pathname === '/'
            })}
          >
            Partners
          </Link>

        </Nav>

        <Nav>

          <Link
            to="#"
            className="nav-link me-2 my-auto"
          >
            Login
          </Link>

          <Link
            to="#"
            className="btn btn-success rounded-pill fs-5 py-1 w-sm my-auto"
          >
            Register
          </Link>

        </Nav>

      </Navbar>
    </Fragment >
  );
};

export default NavigationDiv;
