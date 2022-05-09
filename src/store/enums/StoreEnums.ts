enum Actions {
  // action types
  ADD_BODY_CLASSNAME = 'addBodyClassName',
  REMOVE_BODY_CLASSNAME = 'removeBodyClassName',
  ADD_BODY_ATTRIBUTE = 'addBodyAttribute',
  REMOVE_BODY_ATTRIBUTE = 'removeBodyAttribute',
  ADD_CLASSNAME = 'addClassName',
  SIGNOUT = 'signout',
  SIGNIN = 'signin',
  CONFIRM_SIGNIN = 'confirmSignin',
  UPDATE_USER = 'updateUser',
  SET_BREADCRUMB_ACTION = 'setBreadcrumbAction',
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = 'appendBreadcrumb',
  PURGE_AUTH = 'logOut',
  SET_AUTH = 'setAuth',
  SET_PREAUTH = 'preAuth',
  SET_USER = 'setUser',
  SET_PASSWORD = 'setPassword',
  SET_ERROR = 'setError',
  SET_BREADCRUMB_MUTATION = 'setBreadcrumbMutation',
  SET_LAYOUT_CONFIG = 'setLayoutConfig',
  RESET_LAYOUT_CONFIG = 'resetLayoutConfig',
  OVERRIDE_LAYOUT_CONFIG = 'overrideLayoutConfig',
  OVERRIDE_PAGE_LAYOUT_CONFIG = 'overridePageLayoutConfig',
}

export { Actions, Mutations };
