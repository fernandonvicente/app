import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Title, RowClosure, InfoClosure, TitleClosure, ValueClosure,
  RowCurrentCapital, InfoCurrentCapital, TitleCurrentCapital, ValueCurrentCapital,
  DetailingCurrentCapital, DetailingCurrentCapitalRight, DetailingCurrentCapitalLeft,
  DetailingRowCurrentCapital, TitleDetailing, SubTitleDetailing, ResultSubTitleDetailing } from './styles';


import Extrato from '../private/Extrato';
import Aporte from '../private/Aporte';
import Resgate from '../private/Resgate';
import Servicos from '../private/Servicos';
import ServicosItens from '../private/ServicosItens';
import Notificacao from '../private/Notificacao';

const MainStackNavigator = createStackNavigator();

function MainStack() {
  return (
    
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}
     initialRouteName="Home"
    > 
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="Servicos" component={Servicos} />
      <Stack.Screen name="ServicosItens" component={ServicosItens} />
      <Stack.Screen name="Notificacao" component={Notificacao} />
   </MainStack.Navigator>
  );
}
function Dashboard() {
  
  return (
  
      <Background>
        <Header />
          <Container>
          
            <RowClosure>                
                <InfoClosure>
                    <TitleClosure>Fechamento 00/00/0000</TitleClosure>
                    <ValueClosure>R$ 2.000,00</ValueClosure>
                </InfoClosure>
            </RowClosure>

            <RowCurrentCapital>                
                <InfoCurrentCapital>
                    <TitleCurrentCapital>Capital Atual 00/00/0000</TitleCurrentCapital>
                    <ValueCurrentCapital>R$ 4.000,00</ValueCurrentCapital>
                </InfoCurrentCapital>
            </RowCurrentCapital>

            <RowCurrentCapital>  
              <DetailingCurrentCapitalLeft>             
                <InfoCurrentCapital>
                    <TitleDetailing>Resultados Jun/20</TitleDetailing>
                    <SubTitleDetailing>Rentabilidade</SubTitleDetailing>
                    <ResultSubTitleDetailing>1,000%</ResultSubTitleDetailing>
                    <SubTitleDetailing>Result. Capital</SubTitleDetailing>
                    <ResultSubTitleDetailing>R$ 0.000,00</ResultSubTitleDetailing>
                    <SubTitleDetailing>Valor Recebido</SubTitleDetailing>
                    <ResultSubTitleDetailing>R$ 0.000,00</ResultSubTitleDetailing>
                </InfoCurrentCapital>
              </DetailingCurrentCapitalLeft> 

              <DetailingCurrentCapitalRight>             
                <InfoCurrentCapital>
                    <TitleDetailing>Capital Atual</TitleDetailing>
                    <SubTitleDetailing>Jun/2020</SubTitleDetailing>
                    <ResultSubTitleDetailing>R$ 0.000,00</ResultSubTitleDetailing>
                    <SubTitleDetailing>Valor Atual</SubTitleDetailing>
                    <ResultSubTitleDetailing>R$ 0.000,00</ResultSubTitleDetailing>
                    <SubTitleDetailing></SubTitleDetailing>
                    <ResultSubTitleDetailing></ResultSubTitleDetailing>
                </InfoCurrentCapital>
              </DetailingCurrentCapitalRight> 
            </RowCurrentCapital>

          </Container>            

      </Background>
  );
}

export Default MainStack;
