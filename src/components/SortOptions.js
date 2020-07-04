import React from 'react';
import { sortOptions } from '../data';

function SortOptions({ formData, onChange }) {
  const sort = (formData && formData.s) || '';
  const order = (formData && formData.o) || '';

  return (
    <select
      id="search_sort"
      name="s"
      className="select"
      value={`${sort}:${order}`}
      onChange={onChange}
    >
      {sortOptions.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default SortOptions;
