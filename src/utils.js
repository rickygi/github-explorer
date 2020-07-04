import parse from 'parse-link-header';

function createParams(entries) {
  const params = {};

  for (let [key, value] of entries) {
    params[key] = value;
  }

  return params;
}

function createQueryString(params) {
  const q = params.q ? `?q=${params.q.trim()}` : '?q=';
  const l = params.l ? `+language:${params.l}` : '';
  const s = params.s ? `&sort=${params.s}` : '';
  const o = params.o ? `&order=${params.o}` : '';
  const p = params.p ? `&page=${params.p}` : '';
  const t = params.t ? params.t : 'repositories';

  return `${t}${q}${l}${s}${o}${p}`;
}

async function fetchJson(url, method, data) {
  const headers = {};
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: method || 'GET',
    body: JSON.stringify(data) || null
  };

  const request = await fetch(url, options);

  if (!request.ok) {
    throw new Error();
  }

  const json = await request.json();

  for (let [key, value] of request.headers.entries()) {
    if (key === 'link') {
      headers[key] = value;
    }
  }

  const links = parse(headers['link']);

  return { ...json, links };
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return { ...state, formData: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export { createParams, createQueryString, fetchJson, reducer };
