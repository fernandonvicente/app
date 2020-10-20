import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';

export default class OneSignalNotification extends Component {
    constructor(properties) {
      super(properties);
      OneSignal.init("5962a738-5010-4d3e-97d1-212b8e796141");
  
      OneSignal.addEventListener('opened', this.onOpened);
    }
  
    componentWillUnmount() {
      OneSignal.removeEventListener('opened', this.onOpened);
    }
  
    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('openResult: ', openResult);
    }
  }