import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { View, Text, Image, Alert } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Title, Services, Avatar, Name, ServicesList, ServicesRow } from './styles';

export default function Servicos() {
  
  return (
      <Background>
          <Header />
          <Container>              
          <Title>Serviços</Title>

          <ServicesRow>
            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 1</Name>
            </Services>

            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 2</Name>
            </Services>
          </ServicesRow>

          <ServicesRow>
            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 1</Name>
            </Services>

            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 2</Name>
            </Services>
          </ServicesRow>

          <ServicesRow>
            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 1</Name>
            </Services>

            <Services>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
              />
              <Name>Serviço 2</Name>
            </Services>
          </ServicesRow>


          
          </Container> 
      </Background>
  );
}

Servicos.navigationOptons = {
  tabBarLabel: 'Serviços',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="settings" size={20} color={tintColor} />
  ),
};

