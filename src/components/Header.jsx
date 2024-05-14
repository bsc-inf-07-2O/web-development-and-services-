import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="container-fluid p-0">
        <div className="header-bottom-strip py-1 px-3 small">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Delivery Over k10,000 & Free Return
              </p>
            </div>

            <div className="col-6">
              <p className="text-end text-white mb-0">
                Mobile Line:
                <a className="text-white" href="+265 996467525">
                  +265 883754245
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="header-top-strip p-3 border-bottom border-secondary">
          <div className="row align-items-center">
            <div className="col-3">
              <h5>
                <Link className="text-white">UNIMA Market Place</Link>
              </h5>
            </div>
            <div className="col-5 ">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Products Here..."
                  aria-label="Search Products Here..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="px-3 py-2 rounded-end bg-warning"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6 my-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom-strip p-3 small">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-15">
                  <div>
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Market categories
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-30">
                      <NavLink to="/">Home</NavLink>
                      <span className="separator"></span>
                      <NavLink to="/">Our Store</NavLink>
                      <span className="separator"></span>
                      <NavLink to="/">Blogs</NavLink>
                      <span className="separator"></span>
                      <NavLink to="/Contact">Contact</NavLink>
                      <span className="separator"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
