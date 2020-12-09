import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import App from "../App";
import Pagination from "../Pagination";

const Apps = ({ activeFilter, searchApp }) => {
  const data = useSelector((state) => state.apps.collections);
  const [currentPage, setCurrentPage] = useState(1);
  const appsPerPage = 3;

  const orderList = data
    .map((item) => ({
      ...item,
      totalSize: item.subscriptions.reduce((sum, cur) => sum + cur.price, 0),
    }))
    .sort((a, b) => a.totalSize - b.totalSize);

  const filteredApps = useMemo(() => {
    const filtered = orderList.filter((app) =>
      app.name.toLowerCase().includes(searchApp.toLowerCase())
    );

    if (activeFilter) {
      return filtered.filter((item) => item.categories == activeFilter);
    }
    return filtered;
  }, [orderList, searchApp]);

  const currentApps = filteredApps.slice(
    (currentPage - 1) * appsPerPage,
    currentPage * appsPerPage
  );
  const pages = Math.ceil(filteredApps.length / appsPerPage);

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  }, [currentPage, pages]);

  const pageNumbers = Array(pages)
    .fill(null)
    .map((val, index) => index + 1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ul>
        {currentApps
          .filter((app) => {
            return app.name.toLowerCase().indexOf(searchApp.toLowerCase()) >= 0;
          })
          .map((app) => (
            <li key={app.id}>
              <App app={app} />
            </li>
          ))}
      </ul>
      <Pagination
        pageNumbers={pageNumbers}
        handleClick={handleClick}
        currentPage={currentPage}
      />
    </>
  );
};

Apps.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  searchApp: PropTypes.string.isRequired,
};

export default Apps;
