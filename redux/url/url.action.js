export const setAnonUrlSubmit = url => {
  return {
    type: 'SET_ANON_URL_SUBMIT',
    payload: url
  };
};

export const setUrlError = errMsg => {
  return {
    type: 'SET_URL_ERROR',
    payload: errMsg
  };
};

export const setAnonUrlReturn = url => {
  return {
    type: 'SET_ANON_URL_RETURN',
    payload: url
  };
};

export const setUserUrls = urlList => {
  return {
    type: 'SET_USER_URLS',
    paylaod: urlList
  };
};