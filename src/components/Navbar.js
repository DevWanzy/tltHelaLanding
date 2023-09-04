import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Collapse } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";


const Navbar = props => {

  const [talent, setTalent] = useState(false);
  const [events, setEvents] = useState(false);
  const [learning, setLearning] = useState(false);

  useEffect(() => {
    if (!props.leftMenu) {
      setTalent(false);
      setEvents(false);
      setLearning(false);
    }
  }, [props]);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav d-lg-none">
        <div className="container-fluid">

          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              in={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >

              <ul className="navbar-nav">

                <li className="nav-item dropdown">
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

                <li className="nav-item dropdown">
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

                <li className="nav-item dropdown">
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

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    {/* <Link
                    to="#"
                    className={classNames('nav-link me-2', {
                      active: window.location.pathname === '/'
                    })}
                  > */}
                    Shop
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/partners" className="nav-link">
                    {/* <Link
                    to="/partners"
                    className={classNames('nav-link me-2', {
                      active: window.location.pathname === '/'
                    })}
                  > */}
                    Partners
                  </Link>
                </li>

              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
