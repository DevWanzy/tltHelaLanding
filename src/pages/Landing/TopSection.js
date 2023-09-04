import React, { Fragment } from 'react';
import DefaultValues from "constants/DefaultValues";


const TopSection = () => {
  return (
    <Fragment>
      <div className="pt-5 pb-4 mt-4 ms-4">

        <div className="py-4"></div>
        <h1 className="text-dark fw-bolder mt-4 display-4" style={{ width: 300, lineHeight: 0.9 }}>
          Home of
          <span className="text-danger">
            {' '}sports{' '}
          </span>
          and
          <span className="text-danger">
            {' '}creatives
          </span>
        </h1>

        <p className="mt-4" style={{ width: 320, fontSize: '150%' }}>
          Talanta Hela is a government initiative in Kenya that empowers and connects men and women in sports and creatives. It provides resources, training, and opportunities to help them succeed.
        </p>

        <div className="d-flex mt-5 mb-4">
          <img
            src={DefaultValues?.playstore}
            width={150}
            className="me-3"
          />

          <img
            src={DefaultValues?.appstore}
            width={150}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TopSection;
