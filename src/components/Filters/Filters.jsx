import React from 'react';
import PropTypes from 'prop-types';

export const Filters = ({ contactFilter, filterValue, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <input name="filter" onChange={contactFilter} value={filterValue} />
    </div>
  );
};

Filters.propTypes = {
  contactFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
