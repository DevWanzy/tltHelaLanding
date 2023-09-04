import React, { Fragment } from 'react';
import { withTranslation } from "react-i18next";

import { Container } from "react-bootstrap";

import Ajira from "./Ajira";


const Partners = () => {
  return (
    <Fragment>
      <div className="bg-partners">
        <div className="page-content pb-2">

          <div className="pt-5 mt-5">
            <Container>
              <h2 className="fw-bolder">
                <span className="text-white">Our</span>
                {' '}
                <span className="text-danger">Partners</span>
              </h2>
            </Container>
          </div>

        </div>

        <Ajira />

      </div>
    </Fragment>
  );
};

export default withTranslation()(Partners);
