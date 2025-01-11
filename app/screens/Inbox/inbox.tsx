import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RouteTypes';

interface inbox {
	navigation: StackNavigationProp<RootStackParamList, 'Inbox'>;
}

const InboxScreen: FC<inbox> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({})