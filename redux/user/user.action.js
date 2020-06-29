export const setLoggedInState = bool => {
  return {
    type: 'SET_LOGGED_IN_STATE',
    payload: bool
  };
};

export const setUserName = un => {
  return {
    type: 'SET_USER_NAME',
    payload: un
  };
};

export const setUserId = id => {
  return {
    type: 'SET_USER_ID',
    payload: id
  };
};

export const setRegisteredState = bool => {
  return {
    type: 'SET_REGISTERED_STATE',
    payload: bool
  };
};

export const setMobileNavState = bool => {
  return {
    type: 'SET_MOBILE_NAV_STATE',
    payload: bool
  };
};