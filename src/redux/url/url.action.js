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
    payload: urlList
  };
};

export const setUrlOwner = ownerId => {
  return {
    type: 'SET_URL_OWNER',
    payload: ownerId
  };
};

export const setOriginalUrl = originalUrl => {
  return {
    type: 'SET_ORIGINAL_URL',
    payload: originalUrl
  };
};

export const setCreateError = errorMsg => {
  return {
    type: 'SET_CREATE_ERROR',
    payload: errorMsg
  };
};