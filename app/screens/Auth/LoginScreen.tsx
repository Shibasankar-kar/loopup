import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RouteTypes';
interface signIn {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
}

const LoginScreen: FC<signIn> = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
