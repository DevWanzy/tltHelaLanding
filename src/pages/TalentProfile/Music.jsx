import React from "react";
import "./talents.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Eve from "../../assets/images/users/1.png";
import Ffooter from "../../components/footer";
import { Link } from "react-router-dom";

const Music = () => {
  return (
    <div
      className="part
    "
    >
      <div className="top-s">
        <div className="part-2"></div>
        <h2>
          {" "}
          Talent <span>Profile</span>
        </h2>
      </div>
      <div className="bottom-section">
        <div className="left">
          <div className="user-img">
            <img src={Eve} alt="" />
            <p>Let's Connect</p>
          </div>
          <div className="icoss">
            <i>
              <FaYoutube />
            </i>

            <i>
              <FaFacebook />
            </i>

            <i>
              {" "}
              <FaTwitter style={{}} />
            </i>

            <i>
              {" "}
              <FaInstagram style={{ color: "" }} />
            </i>
          </div>
        </div>
        <div className="righ">
          <h2 className="head">Eve Mungai</h2>
          <h5>Social Media Content Creator</h5>
          <ul className="music-items">
            <li>
              <Link to="#">Photo Editing</Link>
            </li>
            <li>
              <Link to="#">Video Editing</Link>
            </li>
            <li>
              <Link to="#">Music</Link>
            </li>
            <li>
              <Link to="#">Interviewing</Link>
            </li>
          </ul>
          <p>
            The program seeks to position Kenya as a choice labour destination
            for multinational companies as well as encourage local companies and
            public sector to create digital work. The government digitization
            projects already create lots of viable micro work that can be
            completed by digital workers. Access to digital work will build
            wealth and grow the middle class across the country. A larger middle
            class means more opportunities for businesses and direct growth of
            GDP. The main objectives are to raise the profile of digital work;
            Promote a mentorship and collaborative learning approach to finding
            digital work; Provide Kenyans with access to digital work, and
            finally Promote Kenya as a destination for online workers.
          </p>
        </div>
      </div>

      <Ffooter />
    </div>
  );
};

export default Music;