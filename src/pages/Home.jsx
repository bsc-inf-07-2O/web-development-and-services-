import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <section className="home-rapper-1 py-5">
        <div className="container xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content position-relative p-3">
                <img
                  src=""
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              <div className="main-banner-content position-absolute">
                <h5></h5>
                <h6></h6>
                <p></p>
                <Link></Link>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
