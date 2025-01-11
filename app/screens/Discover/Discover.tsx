import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RouteTypes';

interface discover {
  navigation: StackNavigationProp<RootStackParamList, 'Discover'>;
}

const DiscoverScreen: FC<discover> = ({navigation}) => {
  return (
    <View>
      <Text>DiscoverScreen</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
