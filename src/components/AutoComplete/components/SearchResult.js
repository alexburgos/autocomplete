import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/SearchResult.css';

function SearchResult({ dogPicture, searchQuery }) {
  return (
    <div className='SearchResult'>
      {searchQuery && <span>{searchQuery}</span>}
      <img src={dogPicture} alt={searchQuery} />
    </div>
  );
}

SearchResult.defaultProps = {
  dogPicture: '',
  searchQuery: ''
};

SearchResult.propTypes = {
  dogPicture: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired
};

export default SearchResult;
