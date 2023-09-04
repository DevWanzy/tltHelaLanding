import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "store/actions";

//i18n
import { withTranslation } from "react-i18next";
import DefaultValues from "constants/DefaultValues";
import NavigationDiv from "components/NavigationDiv";
import minLogo from "assets/images/ministry.png";


const Header = props => {

  useEffect(() => {
    props.toggleLeftmenu(false);
  }, []);


  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header mw-100">
          <div className="d-flex flex-grow-1">

            <img
              src={minLogo}
              height={70}
              className="my-auto mx-3 d-none d-md-block"
            />

            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={DefaultValues?.logo_name} alt="" height="50" />
                </span>
                <span className="logo-lg">
                  <img src={DefaultValues?.logo_name} alt="" height="50" />
                </span>
              </Link>
            </div>

            <NavigationDiv />
          </div>

          <div className="d-flex">

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu);
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
