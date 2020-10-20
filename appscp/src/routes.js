import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/_rootNavigator';

//import './config/ReactotronConfig';

//import AuthContext from './contexts/auth';
import { AuthProider } from '~/contexts/auth';

function Routes({ signed }) {
  return (
    <NavigationContainer>
      <AuthProider>
        <RootNavigator signed={signed}/>
      </AuthProider>
    </NavigationContainer>
  );
}

export default Routes;