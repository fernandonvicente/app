import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { View, Text, Image, Alert } from 'react-native';

import { Container, Left, Avatar, Info, Name, Time } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Extract() {
  
    return (
        <Container>
            <Left>
                <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
                />
                
                <Info>
                    <Name>nome 11111</Name>
                    <Time>00/00/0000</Time>
                </Info>
            </Left>

            <TouchableOpacity onPress={() => {}} >
                <Icon name="event-busy" size={20} color="#f64c75" />
            </TouchableOpacity>

        </Container>
      
    );      

}

