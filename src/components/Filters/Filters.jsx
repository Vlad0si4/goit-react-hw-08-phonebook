import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { StyledInput, Wrapper } from './FilterStyled';
import { contactFilter } from 'components/Redux/filterSlice';

export const Filters = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>{title}</h3>
      <Wrapper>
        <StyledInput
          name="filter"
          onChange={e => dispatch(contactFilter(e.target.value))}
        />
      </Wrapper>
    </>
  );
};

Filters.propTypes = {
  title: PropTypes.string,
};
