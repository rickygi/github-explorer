import React from 'react';
import { createParams } from '../utils';

function SearchLinks({ data, searchParams, setSearchParams }) {
  function handleOnClick(e) {
    const params = createParams(searchParams.entries());
    setSearchParams({ ...params, p: e.target.dataset.page });
  }

  return (
    <ul className="search-links max-width">
      <li className="item prev">
        <div className="btn btn-primary disabled">prev</div>
      </li>
      <li className="item first">
        <div className="btn btn-primary disabled">first</div>
      </li>
      <li className="item last">
        <div className="btn btn-primary disabled">last</div>
      </li>
      <li className="item next">
        <div className="btn btn-primary disabled">next</div>
      </li>
      {data &&
        data.links &&
        Object.entries(data.links).map(([key, value]) => (
          <li key={key} className={`item ${key}`}>
            <button
              className="btn btn-primary"
              data-page={value.page}
              onClick={handleOnClick}
            >
              {key}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default SearchLinks;
