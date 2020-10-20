export function signInRequest(login, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { login, password },
  };
}

export function signInSuccess(token, user, investidor) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, investidor },
  };
}

export function signUpRequest(name, login, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, login, password },
  };
}

/****************************************************************************** */
export function createAporteRequest(token, value_aporte, investidor_id, file) {
  return {
    type: '@auth/CREATE_APORTE_REQUEST',
    payload: { token, value_aporte, investidor_id, file },
  };
}
/****************************************************************************** */

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
