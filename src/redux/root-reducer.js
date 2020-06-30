import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserReducer from './user/user.reducer'
import UrlReducer from './url/url.reducer'

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  userState: UserReducer,
  urlState: UrlReducer
});

export default persistReducer(persistConfig, rootReducer);