import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'; 
import { createAporteRequest } from '~/store/modules/auth/actions';
import { Alert, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

import api from '~/services/api';

import { Container, Form, FormInput, SubmitButton } from './styles-input';

import ImagePicker from 'react-native-image-picker'; 

import Background from '~/components/Background';
import Header from '~/components/Header';
import { moedaMask } from '~/components/MaskInput/moedaMask';

import {  Title, List } from './styles';
import { Avatar } from '~/components/Header/styles';

export default function Aporte({ navigation }) {

  const investidor = useSelector(state => state.user.profile);

  const token = useSelector(state => state.auth.token);
 
  const dispatch = useDispatch();
  const passwordRef = useRef();


  const [valueAporte, setValueAporte] = useState('');
  const [investidorId, setInvestidorId] = useState('');
  const [loading, setLoading] = useState(false);
  //const loading = true;
  const [anexo, setAnexo] = useState('');

  const imagePickerOptions = {
    title: 'Selecione uma imagem',
  }

  //mascara e moeda ao digitar no campo
  function handleChangeMoeda(value){
    setValueAporte(moedaMask(value)); 
  }  
  
  //salvar dos dados do aporte
  async function handleSubmit(){ 
    try {
      setLoading(true); 
        
      var bodyFormData = new FormData();
      bodyFormData.append('file', anexo); 
     
      /*
      const responsex = await dispatch(createAporteRequest(token, valueAporte, investidor.id, bodyFormData));

        console.tron.log('**************************************');
      //console.log(response);
      console.tron.log(responsex);
      */


     if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
     let investidor_id = investidor.id;
     let value_aporte = valueAporte;
     let file = bodyFormData;

     const response = await api.post('/aporte/investidor', {
      value_aporte, 
      investidor_id,
      file
     });
     
      if(response.data.success){
        
        setLoading(false); 
        setValueAporte('');
        setAnexo(''); 

        Alert.alert(
        'Aporte',
        response.data.msg
        );

      }else{

        Alert.alert(
          'Aporte - Erro',
          response.data.msg
        ); 

        setLoading(false); 
      }
      
  } catch (err) {
    //console.log('Erro:', err);

    Alert.alert(
      'Erro',
      err
    ); 

    setLoading(false); 
  }
  
  }

  //faz a seleção da imagem na galeria ou tira a foto
  async function imagePickerCallback(data){

    if(data.didCancel){
      return;
    }
    if(data.error){
      return;
    }
    if(!data.uri){
      return;
    }
    if(data.didCancel){
      return;
    }
   
    setAnexo(data);//salvo os dados do file no state
  }

  return (
      <Background>
        <Header />
          <Container>              
          <Title>Aporte</Title>

          <Form>                  
                  <FormInput 
                      icon="monetization-on"
                      keyboardType="numeric"
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="0.000,00"
                      value={valueAporte}   
                      onChangeText={setValueAporte => handleChangeMoeda(setValueAporte)}             
                  />

                  <View>
                    <Image
                      source={{
                        uri: anexo
                        ? anexo.uri
                        : 'data:image/png;base64,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'
                      }}
                      style={styles.anexo}
                    />
                  </View>

                  <TouchableOpacity style={styles.button} 
                  onPress={() => ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)}>
                    <Text style={styles.buttonText}>
                      Escolher imagem
                    </Text>
                  </TouchableOpacity>

                  <SubmitButton loading={loading} onPress={handleSubmit}>Salvar</SubmitButton>

              </Form>
          
         
          </Container> 
      </Background>
  );
}

Aporte.navigationOptons = {
  tabBarLabel: 'Aporte',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={20} color={tintColor} />
  ),
};

const styles = StyleSheet.create({

  button:{
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff'
  },
  anexo: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
})