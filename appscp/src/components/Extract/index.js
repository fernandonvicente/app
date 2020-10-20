import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { View, Text, Image, Alert } from 'react-native';

import { Container, Left, IconOption, Info, Name, Time, Currency } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Extract({ data }) {

    var statusIcon = null;
    var description = null;
    var description_operation = null;
    //console.log(data.status_operacao);  
    if (data.status_operacao === 'aporte') {
        statusIcon = <Icon name="add-circle" size={20} color="#008000" />;
        description = data.aporte;
    } else if (data.status_operacao === 'resgate') {
        statusIcon = <Icon name="remove-circle" size={20} color="#ff0000" />;
        description = data.resgate;
    }
    description = data.aporte; 

    //if(data.descricao_operacao)
        //description_operation = data.descricao_operacao

    return (
        <Container>
            <Left>
                <IconOption>
                    {statusIcon} 
                </IconOption>
                 
                <Info>                  
                    <Time>{data.descricao_operacao}</Time>
                    <Time>{data.data_operacao}</Time>
                </Info>

                <Currency>
                    <Name>R$ {data.valor}</Name> 
                </Currency>
            </Left> 

            

        </Container>
      
    );      

}