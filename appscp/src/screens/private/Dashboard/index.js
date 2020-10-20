import React from 'react';
import { View, Text, Image, Alert } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Title, RowClosure, InfoClosure, TitleClosure, ValueClosure,
  RowCurrentCapital, InfoCurrentCapital, TitleCurrentCapital, ValueCurrentCapital,
  DetailingCurrentCapital, DetailingCurrentCapitalRight, DetailingCurrentCapitalLeft,
  DetailingRowCurrentCapital, TitleDetailing, SubTitleDetailing, ResultSubTitleDetailing } from './styles';

export default function Dashboard() {
  
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

