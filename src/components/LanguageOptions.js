import React from 'react';
import { languageOptions } from '../data';

function LanguageOptions({ formData, onChange }) {
  const language = (formData && formData.l) || '';

  const popular = languageOptions.filter(({ group }) => group === 'Popular');
  const everythingElse = languageOptions.filter(
    ({ group }) => group === 'Everything else'
  );

  return (
    <select
      id="search_language"
      name="l"
      className="select"
      value={language}
      onChange={onChange}
    >
      <option value="">Any Language</option>
      <optgroup label="Popular">
        {popular.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </optgroup>
      <optgroup label="Everything else">
        {everythingElse.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </optgroup>
    </select>
  );
}

export default LanguageOptions;
