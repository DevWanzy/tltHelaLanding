import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "react-i18next";

import TopSection from "./TopSection";
import MissionVission from "./MissionVision";
import stepsImg from 'assets/images/levels.png';
import Partners from "./Partners";


const Landing = props => {

  //meta title
  document.title = "Talanta Hela";


  return (
    <React.Fragment>
      <div className="page-content px-0">

        <TopSection />

      </div>

      <MissionVission />

      <div className="bg-white pt-4 pb-3">
        <h2 className="fw-bolder text-center text-dark mb-4">
          Scale your <span className="text-danger">Talent</span> to the next level.
        </h2>

        <img
          src={stepsImg}
          className="w-100"
        />
      </div>

      {/* <div className="bg-light slanted-bottom-right py-3">
          <h2 className="fw-bolder text-center text-dark mb-4">
            Success Stories
          </h2>

        </div> */}

      <Partners />

    </React.Fragment>
  );
};

export default withTranslation()(Landing);
