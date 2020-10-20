import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, Alert, StyleSheet, ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useSelector } from 'react-redux';
import api from '~/services/api';
 
import Background from '~/components/Background';
import Header from '~/components/Header';
import Extract from '~/components/Extract';
import Loading from '~/components/Loading';

import { Container, Title, List } from './styles';

export default function Notificacao({ navigation }) {
  const token = useSelector(state => state.auth.token);

  const investidor = useSelector(state => state.user.profile);
  const investidor_id = investidor.id;

  const [loading, setLoading] = useState(false);
 
  const [extracts, setExtracts] = useState([]);   
  
  const [selectedValue, setSelectedValue] = useState(0);//setando o mês selecionado

  const [items, setItems] = useState([]);//itens dos meses

  const [refreshing, setRefreshing] = useState(false);//refreshing da tela

  const onRefresh = useCallback(async() => {  
    //console.log('qdo recarreg.....');
    //console.log(selectedValue);
    setSelectedValue(0);
    let value = null;  
    await loadingExtracts(value);//recarregando a listagem do extrato
  },[]);
  
  const lista = [
    {name_extensive: '10/2020', year_month: '2020-10'},
    {name_extensive: '09/2020', year_month: '2020-09'},
    {name_extensive: '08/2020', year_month: '2020-08'},
    {name_extensive: '07/2020', year_month: '2020-07'},
    {name_extensive: '06/2020', year_month: '2020-06'}, 
    {name_extensive: '05/2020', year_month: '2020-05'},
    {name_extensive: '04/2020', year_month: '2020-04'}
  ];
 

  //quando seleciono o mês do extrato, recarrego a consulta
  async function handleSubmit(value){
    setSelectedValue(value);
    //console.log('qdo seleciona a opção.....');
    //console.log(value);
    //setSelectedValue(value);
    //console.log('consulta a opção.....');
    //console.log(selectedValue);
    
    await loadingExtracts(value);//recarregando a listagem do extrato
  }  

  //mes atual-----------------------------------------------------------------------------------------
  async function monthYear(){
    
    let month = new Date().getMonth() + 1; //To get the Current Month
    if(month < 10)
      month = 0+''+month;

    let year = new Date().getFullYear();

    return year+'-'+month;
  }
  

  //listando os meses para selecionar o extrato--------------------------------------------------------
  async function getMonths() {

    //const body = await lista;
    const body = await api.get(`/meses-extrato`);
    //console.log(body);//vindo dados do lista
    //const body = await lista.json();
    setItems(body.data.map(({ name_extensive,year_month }) => ({ label: name_extensive, value: year_month })));

  } 

  //listando o extrato---------------------------------------------------------------------------------
  async function loadingExtracts(mesSelecionado) {

    try {

        let mesAtual = 0;

        if(!mesSelecionado)
          mesAtual = await monthYear();
        else
          mesAtual = mesSelecionado;
        
        setLoading(true);

        if (token) api.defaults.headers.Authorization = `Bearer ${token}`;

            const response = await api.get(`/extrato/investidor/${investidor_id}/${mesAtual}`);

        if(response.data.success){

            //******tratar o response qdo expirar o token*********

            //console.log('----------------extrato--------------------');
            console.log(response.data.extratos);  
            setExtracts(response.data.extratos);       
            
            setLoading(false);

        }else{
          //console.log('ErroX1:', err);
          console.log('ErroX1:');
          console.log(response.data);  
          Alert.alert(
            'Aporte - Erro',
            response.data.msg
          ); 
  
          setLoading(false); 

        }

    } catch (err) {
        //console.log('ErroX2:', err);
        console.log('ErroX2:');
        console.log(response.data.extratos);  
        Alert.alert(
          'Erro catch',
          err
        ); 

        setLoading(false); 
    }
  }
 
  //ao clicar no tabNavigaator da tela, a mesma é recarregada
  async function unsubscribe(){
    
    const unsubscribe = navigation.addListener('focus', () => {    
      let value = null;  
      loadingExtracts(value);//recarregando a listagem do extrato
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  } 

  //ao carregar a tela chama as funcoes-----------------------------------------------------------------
  useEffect(() =>{

    unsubscribe();
    
    getMonths();

    loadingExtracts();
  }, []);

  return (
  
      <Background>
        <Header />
          <Container>              
          <Title>Notificação</Title>
          
          {loading &&
            <Loading />
          }
          {!loading &&

            <>

            <Picker 
            selectedValue={selectedValue}
            style={{ height: 50, width: 350 }}
            //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            onValueChange={handleSubmit}
            >         
            {items && items.map((item, k) => (
              <Picker.Item key={k} label={item.label}  value={item.value} />
            ))} 
            </Picker>

            <List 
              data={extracts}
              keyExtractor={item => String(item.indice)}
              renderItem={({ item }) => <Extract data={item} />}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />

            </>          
          
          }          
          
          </Container> 
      </Background>
  );
}

Notificacao.navigationOptons = {
  tabBarLabel: 'Notificacao',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={20} color={tintColor} />
  ),
};