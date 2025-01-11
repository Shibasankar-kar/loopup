import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RouteTypes';

interface profile {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

const ProfileScreen: FC<profile> = ({navigation}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({})