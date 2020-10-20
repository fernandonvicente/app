import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, Carregando } from './styles';

export default function Loading() {
    
    return (

            <Container>
              <ActivityIndicator size="large" color="#fff" />
              <Carregando>Carregando...</Carregando>
            </Container>      
    );      

}