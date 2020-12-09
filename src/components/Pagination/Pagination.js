import React from "react";
import "./Pagination.scss";
import PropTypes from "prop-types";

const Pagination = ({ pageNumbers, handleClick, currentPage }) => {
  return (
    <ul className="pagination">
      <li>
        <a href="#">&lt;</a>
      </li>
      {pageNumbers.map((page, index) => {
        return (
          <li
            key={page}
            onClick={() => handleClick(page)}
            className={index === currentPage - 1 ? "active" : ""}
          >
            <a href="#">{page}</a>
          </li>
        );
      })}
      <li>
        <a href="#">&gt;</a>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  pageNumbers: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
