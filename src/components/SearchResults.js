import React from 'react';

function SearchResults({ data }) {
  return (
    <ul className="search-results max-width">
      {data.items && data.items.length > 0 ? (
        data.items.map((item) => (
          <li key={item.id} className="item card">
            <h3 className="title">{item.name}</h3>
            <p className="description">{item.description}</p>
          </li>
        ))
      ) : (
        <li className="item card">
          <h3 className="title text-center">No Results</h3>
        </li>
      )}
    </ul>
  );
}

export default SearchResults;
