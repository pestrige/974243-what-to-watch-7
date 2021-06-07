import React from 'react';
import PropTypes from 'prop-types';
import Main from '../pages/main/main';

export default function App(props) {
  const {films} = props;
  return (
    <Main films = {films}/>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
