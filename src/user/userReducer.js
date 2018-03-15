const initialState = {
  user: null,
  data: null,
  indexconsents: [],
  consent: null,
  showConsent: false,
  consentCreated: false
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
  {
    return Object.assign({}, state, {
      user: action.payload
    })
  }

  if (action.type === 'CONSENT_CANDIDAT_SUCCESS') {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      user: null
    })
  }

  if (action.type === "GET_CONSENTS_INDEXES_DONE") {
    return Object.assign({}, state, {
      indexconsents: action.payload
    })
  }

  if (action.type === 'GET_CONSENTS_SUCCESS') {
    return Object.assign({}, state, {
      consent: action.payload,
      showConsent: true
    })
  }

  if (action.type === 'CONSENT_CREATED_SUCCESS') {
    return Object.assign({}, state, {
      consentCreated: true
    })
  }

  return state
}

export default userReducer
