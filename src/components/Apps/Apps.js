import React from "react";
import "./Apps.scss";
import { useSelector } from "react-redux";

const Apps = () => {
  const data = useSelector((state) => state.apps.collections);

  return (
    <ul>
      {data.map((app) => (
        <li key={app.id}>
          <div className="app-item">
            <div className="box-info">
              <div className="box-info--content">
                <div className="description">
                  <h1>Voice Report</h1>
                  <p>Calls reporting and analytics of your calls.</p>
                </div>
                <div className="tags">
                  <span>Voice Analytics</span> / <span>Reporting</span> /{" "}
                  <span>Optimization</span>
                </div>
              </div>
              <div className="box-info--footer">
                <ul>
                  <li>
                    <span>Trial</span>{" "}
                    <h3>
                      Free<sup></sup>
                    </h3>
                  </li>
                  <li>
                    <span>Professional</span>{" "}
                    <h3>
                      35.00<sup>€</sup>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Apps;
