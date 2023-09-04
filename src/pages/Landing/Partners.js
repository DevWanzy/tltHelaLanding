import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { partners } from "assets/images/partners";


const Partners = props => {
  return (
    <Fragment>
      <div className="bg-white py-3 px-3">
        <h3 className="fw-bolder text-center text-dark mb-4">
          Our Partners
        </h3>

        <div className="d-flex flex-nowrap mb-4 overflow-x-auto">
          {partners.map(item =>
            <div key={item.label} className="text-center flex-grow-1 px-2 my-auto">
              <Link to={'/partners#' + item.label}>
                <img
                  src={item.img}
                  // width={'45%'}
                  height={50}
                // className="img-fluid"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Partners;
