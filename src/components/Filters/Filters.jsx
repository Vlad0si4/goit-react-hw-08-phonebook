import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactFilter } from 'components/Redux/contactSlice';

export const Filters = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <input
        name="filter"
        onChange={e => dispatch(contactFilter(e.target.value))}
      />
    </div>
  );
};

Filters.propTypes = {
  title: PropTypes.string,
};
