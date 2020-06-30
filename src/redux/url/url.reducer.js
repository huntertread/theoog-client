const INITIAL_STATE = {
  anonUrlSubmit: '',
  urlError: '',
  anonUrlReturn: [],
  urls: [],
  owner: '1',
  originalurl: '',
  validationError: ''
};

const UrlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ANON_URL_SUBMIT':
      return ({
        ...state,
        anonUrlSubmit: action.payload
      });
    case 'SET_URL_ERROR':
      return ({
        ...state,
        urlError: action.payload
      });
    case 'SET_ANON_URL_RETURN':
      return ({
        ...state,
        anonUrlReturn: action.payload
      });
    case 'SET_USER_URLS':
      return ({
        ...state,
        urls: action.payload
      });
    case 'SET_URL_OWNER': 
      return ({
        ...state,
        owner: action.payload
      });
    case 'SET_ORIGINAL_URL':
      return ({
        ...state,
        originalurl: action.payload
      });
    case 'SET_CREATE_ERROR':
      return ({
        ...state,
        validationError: action.payload
      });
    default:
      return state;
  };
};

export default UrlReducer;