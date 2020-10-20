import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
 
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { login, password } = payload;

    const response = yield call(api.post, '/auth/login', {
      login,
      password,
    });      
   
    const { token, user, investidor } = response.data;

    //const  token  = response.data.access_token;
    //const  user  = response.data.user;
/*
    if (user) {
      Alert.alert(
        'OK no login',
        'O usuário logado com sucesso'
      );
      return;
    } 
  */   
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, investidor));

    // history.push('/dashboard');
  } catch (err) {
    console.tron.log('erro de login');
    console.tron.log(err);
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifiique seus dados'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifiique seus dados'
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

/*
export function signOut() {
  // history.push('/');
}
*/


//*************************************************** */
export async function* createAporte({ payload }) {
  try {

    const { token, value_aporte, investidor_id, file } = payload;

    if (token) api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.post, '/aporte/investidor', {
      value_aporte, 
      investidor_id,
      file
    });

    console.tron.log(response);

   return response;

    // history.push('/');
  } catch (err) {
    /*
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    */
   return 'Houve um erro no cadastro, verifique seus dados';

    //yield put(signFailure());
  }
}
//*************************************************** */


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  //takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/CREATE_APORTE_REQUEST', createAporte),
]);
