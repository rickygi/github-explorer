import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { createParams, createQueryString, fetchJson, reducer } from '../utils';
import { SearchForm, SearchLinks, SearchResults } from '../components';

function Search() {
  const initialState = { formData: {}, data: null };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    let didCancel = false;
    const params = createParams(searchParams.entries());

    dispatch({ type: 'SET_FORM_DATA', payload: params });

    if (params.q) {
      const queryString = createQueryString(params);

      fetchJson(`https://api.github.com/search/${queryString}`).then((res) => {
        if (!didCancel) {
          dispatch({ type: 'SET_DATA', payload: res });
        }
      });
    } else {
      dispatch({ type: 'SET_DATA', payload: null });
    }

    return () => {
      didCancel = true;
    };
  }, [searchParams, dispatch]);

  return (
    <div className="search">
      <div className="search-header">
        <h1 className="search-title">GitHub Explorer</h1>
      </div>

      <SearchForm
        formData={state.formData}
        dispatch={dispatch}
        setSearchParams={setSearchParams}
      />

      {state.data ? (
        <SearchResults data={state.data} />
      ) : (
        <h2>Search GitHub</h2>
      )}

      {state.data && (
        <SearchLinks
          data={state.data}
          dispatch={dispatch}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
    </div>
  );
}

export default Search;
