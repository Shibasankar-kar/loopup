import {View} from 'react-native';
import React, {FC} from 'react';
import BottomTabBar from './BottomTabBar';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RouteTypes';

const StackNavigator: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={'BottomTabBar'}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen name={'BottomTabBar'} component={BottomTabBar} />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigator;
