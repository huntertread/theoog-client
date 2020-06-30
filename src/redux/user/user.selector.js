import { createSelector } from 'reselect'

const selectUser = state => state.userState;

export const selectUserLogInState = createSelector(
  [selectUser],
  userState => userState.loggedIn
);

export const selectUserName = createSelector(
  [selectUser],
  userState => userState.username
);

export const selectUserId = createSelector(
  [selectUser],
  userState => userState.userid
);

export const selectRegisteredState = createSelector(
  [selectUser],
  userState => userState.registered
);

export const selectMobileNavState = createSelector(
  [selectUser],
  userState => userState.mobileNavOpen
);