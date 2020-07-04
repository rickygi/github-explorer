import React from 'react';

function QueryInput({ formData, onChange }) {
  const query = (formData && formData.q) || '';

  return (
    <input
      type="text"
      id="search_query"
      name="q"
      className="input"
      placeholder="Search GitHub"
      value={query}
      onChange={onChange}
    />
  );
}

export default QueryInput;
