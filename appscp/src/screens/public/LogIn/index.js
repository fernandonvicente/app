import React, { useRef, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import { signInRequest } from '~/store/modules/auth/actions';


import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import Input from '~/components/Input';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function Login({ navigation }) {

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  
  function handleSubmit(){
    //Alert.alert('enviar dados do login');
    dispatch(signInRequest(login, password));
    //const signed = useSelector(state => state.auth.signed);//checa se o usuario está logado

    //console.log(signed);
  }

  return (
  
      <Background>
          <Container>
              <Image source={logo} />

              <Form>
                  <FormInput 
                      icon="account-circle"
                      keyboardType="numeric"
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Digite seu CPF"
                      returnKeyType="next"  
                      onSubmitEditing={() => passwordRef.current.focus()}   
                      value={login}   
                      onChangeText={setLogin}              
                  />
  
                  <FormInput 
                      icon="lock-outline"
                      keyboardType="numeric"
                      secureTextEntry
                      placeholder="Digite sua senha"                     
                      returnKeyType="send"
                      ref={passwordRef}
                      onSubmitEditing={handleSubmit} 
                      value={password}   
                      onChangeText={setPassword} 
                      
                  />

                <SubmitButton loading={loading} onPress={handleSubmit}>Entrar</SubmitButton>

              </Form>

              <SignLink onPress={() => navigation.navigate('Register')}>
                <SignLinkText>Criar conta</SignLinkText>                
              </SignLink>

              <SignLink onPress={() => navigation.navigate('PrivateTabNavigator')}>
                <SignLinkText>Dashboard</SignLinkText>                
              </SignLink>

              <SignLink onPress={() => navigation.navigate('PrivateNavigator')}>
                <SignLinkText>Drawer navigate</SignLinkText>                
              </SignLink>

          </Container>            

      </Background>
  );
}

