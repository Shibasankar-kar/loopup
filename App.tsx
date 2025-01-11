import {StyleSheet, View} from 'react-native';
import React from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import NavigationRoutes from './app/navigation/Routes';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '1075817863798-7m5fiug2id9rnuika9rb5bqkgrms5rqv.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    iosClientId:
      '1075817863798-m6ed1qo2oipdc857ldq41mtrb1n9drng.apps.googleusercontent.com',
  });

  return <NavigationRoutes />;
};

export default App;

const styles = StyleSheet.create({container: {flex: 1}});
