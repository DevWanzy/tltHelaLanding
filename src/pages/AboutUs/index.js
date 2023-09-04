import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "react-i18next";

import { Container } from "react-bootstrap";


const AboutUs = props => {

  //meta title
  document.title = "Talanta Hela";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

        </Container>
      </div>
    </React.Fragment>
  );
};

AboutUs.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(AboutUs);
