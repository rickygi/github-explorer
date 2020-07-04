import React from 'react';
import { QueryInput, LanguageOptions, SortOptions } from '../components';

function SearchForm({ formData, dispatch, setSearchParams }) {
  function handleOnSubmit(e) {
    e.preventDefault();
    setSearchParams({ ...formData, p: 1 });
  }

  function handleOnChange(e) {
    const param = { [e.target.name]: e.target.value };
    dispatch({ type: 'SET_FORM_DATA', payload: { ...formData, ...param } });
  }

  function handleSortOnChange(e) {
    const values = e.target.value.split(':');
    const sort = { s: values[0] };
    const order = { o: values[1] };
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { ...formData, ...sort, ...order }
    });
  }

  return (
    <div className="search-form">
      <div className="container max-width">
        <form className="form max-width" onSubmit={handleOnSubmit}>
          <QueryInput formData={formData} onChange={handleOnChange} />
          <LanguageOptions formData={formData} onChange={handleOnChange} />
          <SortOptions formData={formData} onChange={handleSortOnChange} />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
