import { createSelector } from 'reslect'

const selectUrl = state => state.urlState;

export const selectAnonUrlSubmit = createSelector(
  [selectUrl],
  urlState => urlState.anonUrlSubmit
);

export const selectUrlError = createSelector(
  [selectUrl],
  urlState => urlState.urlError
)

export const selectAnonUrlReturn = createSelector(
  [selectUrl],
  urlState => urlState.anonUrlReturn
);

export const selectUserUrls = createSelector(
  [selectUrl],
  urlState => urlState.urls
);

export const selectUrlOwner = createSelector(
  [selectUrl],
  urlState => urlState.owner
);

export const selectOriginalUrl = createSelector(
  [selectUrl],
  urlState => urlState.originalUrl
);

export const selectCreateError = createSelector(
  [selectUrl],
  urlState => urlState.validationError
);