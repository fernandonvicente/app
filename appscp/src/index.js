import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';
import OneSignal from 'react-native-onesignal';


export default function Index() {

  async function onIds(device) {
    console.log('Device info: ', device);
  }

  async function onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  async function onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.tron.log(openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }
  

  useEffect(() => {
    
    try {
      
      OneSignal.init("5962a738-5010-4d3e-97d1-212b8e796141");
      OneSignal.addEventListener('received', onReceived);
      OneSignal.addEventListener('opened', onOpened);
      OneSignal.addEventListener('ids', onIds);

      return () => {
        console.log('Removing Event Listeners');
        OneSignal.removeEventListener('received', onReceived);
        OneSignal.removeEventListener('opened', onOpened);
      }; 
      
  
    } catch (error) {
      // Tratar o erro adequadamente
      console.log('erro.................');
      console.log(error);
    }

  }, [] )
 

  return (  
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    );
}

