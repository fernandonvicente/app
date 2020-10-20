import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import  { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Title, RowClosure, InfoClosure, TitleClosure, ValueClosure,
  RowCurrentCapital, InfoCurrentCapital, TitleCurrentCapital, ValueCurrentCapital,
  DetailingCurrentCapital, DetailingCurrentCapitalRight, DetailingCurrentCapitalLeft,
  DetailingRowCurrentCapital, TitleDetailing, SubTitleDetailing, ResultSubTitleDetailing } from './styles';

export default function ServicosItens() {

  const dispatch = useDispatch();
   
  function Logout(){
    dispatch(signOut());
  }
  
  return (
  
      <Background>
        <Header />
          <Container>
          
            <RowClosure>                
                <InfoClosure>
                <TouchableOpacity onPress={Logout}>
                    <TitleClosure>Sair</TitleClosure>
                </TouchableOpacity>
                </InfoClosure>
            </RowClosure>

            

            

          </Container>            

      </Background>
  );
}

