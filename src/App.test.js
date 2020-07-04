import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app header', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App value={{}} action={() => {}} />
    </BrowserRouter>
  );
  const headerElement = getByText(/GitHub Explorer/i);
  expect(headerElement).toBeInTheDocument();
});
