const INITIAL_STATE = {
  loggedIn: false,
  username: "anon",
  userid: '1',
  registered: true,
  mobileNavOpen: false
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_STATE':
      return ({
        ...state,
        loggedIn: action.payload
      });
    case 'SET_USER_NAME':
      return ({
        ...state,
        username: action.payload
      });
    case 'SET_USER_ID':
      return ({
        ...state,
        userid: action.payload
      });
    case 'SET_REGISTERED_STATE':
      return ({
        ...state,
        registered: action.payload
      })
    case 'SET_MOBILE_NAV_STATE':
      return ({
        ...state,
        mobileNavOpen: action.payload
      })
    default:
      return: state;
  };
};

export default UserReducer;