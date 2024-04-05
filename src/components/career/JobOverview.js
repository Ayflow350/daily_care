import React from 'react';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { BiMap, BiUser, BiWallet } from 'react-icons/bi';

const JobOverview = () => {
  return (
    <>
      <div className="job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
        <h5>Job Overviews</h5>
        <ul className="job-overview-list list-unstyled mt-4">
          <li>
            <i className="far text-primary">
              <BiMap className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Location:</h6>
              <span>Baltimore, MD</span>
            </div>
          </li>
          <li>
            <i className="far text-primary">
              <BiUser className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Job Title:</h6>
              <span>Direct Support Professional</span>
            </div>
          </li>
          <li>
            <i className="far text-primary">
              <FiClock className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Hours:</h6>
              <span>40hrs / week</span>
            </div>
          </li>
          <li>
            <i className="far text-primary">
              <FaHistory className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Rate:</h6>
              <span>$17 - $18 / hour</span>
            </div>
          </li>
          
        </ul>
        <Link href="/register">
          <a className="btn btn-primary d-block mt-5">Apply now</a>
        </Link>
      </div>
    </>
  );
};

export default JobOverview;
