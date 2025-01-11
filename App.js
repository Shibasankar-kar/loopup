import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '1075817863798-7m5fiug2id9rnuika9rb5bqkgrms5rqv.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    iosClientId:
      '1075817863798-m6ed1qo2oipdc857ldq41mtrb1n9drng.apps.googleusercontent.com',
  });

  const signinwithgoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo?.data;
      console.log('idToken: ', idToken);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => signinwithgoogle()}>
        <Text>Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({container: {flex: 1}});
