import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Container, Left, Avatar, Info, Name, Time } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Notificacao from '../../../src/screens/private/Notificacao';
 
/**
 source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
 */
export default function Header() {
    const investidor = useSelector(state => state.user.profile);

    const navigation = useNavigation(); //faz a parte de navegação entre telas


    //console.log('*********');
    //console.log(user);
    //console.log('==============');
    //console.log(user.id);

    //const { navigate } = this.props.navigation;
    // function ServicosItens()
        //navigation.navigate('ServicosItens');  
    //}

    return (
        
        <Container>
            <Left>
                <Avatar                
                source={require('~/assets/avatar_app.png')}
                />
                
                <Info>
                    <Name>{investidor.razao_social}</Name>
                    <Time>{investidor.documento}</Time>
                </Info>
            </Left>

            <TouchableOpacity onPress={() => navigation.navigate('ServicesTab.Notificacao')} >
                <Icon name="notifications" size={20} color="#000" />
            </TouchableOpacity>  

            <TouchableOpacity onPress={() => navigation.navigate('ServicosItens')} >
                <Icon name="menu" size={20} color="#000" />
            </TouchableOpacity>

        </Container>
      
    );      

}

