import React from "react";
import PropTypes from "prop-types";

const App = ({ app }) => {
  const formatValue = (num) => {
    const value = (num / 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return value;
  };

  return (
    <div className="app-item">
      <div className="box-info">
        <div className="box-info--content">
          <div className="description">
            <h1>{app.name}</h1>
            <p>{app.description}</p>
          </div>
          <div className="tags">
            <span>{app.categories.join(" / ")}</span>
          </div>
        </div>
        <div className="box-info--footer">
          <ul>
            {app.subscriptions.map((cat) => (
              <li key={cat.name}>
                <span>{cat.name}</span>
                {cat.price !== 0 ? (
                  <h3>
                    {formatValue(cat.price)}
                    <sup>€</sup>
                  </h3>
                ) : (
                  <h3>
                    Free<sup></sup>
                  </h3>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default App;
