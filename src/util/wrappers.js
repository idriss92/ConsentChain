import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

// Layout Component Wrappers

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/', // '/login' by default.
  wrapperDisplayName: 'UserIsAuthenticated'
})

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user.user === null,
  allowRedirectBack: false
})

// UI Component Wrappers

export const VisibleOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyAuth',
  predicate: user => user.user,
  FailureComponent: null
})

export const HiddenOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'HiddenOnlyAuth',
  predicate: user => user.user === null,
  FailureComponent: null
})
