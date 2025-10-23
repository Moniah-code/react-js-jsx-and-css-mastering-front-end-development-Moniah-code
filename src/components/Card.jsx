import React from "react";
import PropTypes from "prop-types";

function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
