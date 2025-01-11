import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts, SizeConfig} from '../assets/component/component';
import HomeScreen from '../screens/Home/Home';
import DiscoverScreen from '../screens/Discover/Discover';
import InboxScreen from '../screens/Inbox/inbox';
import ProfileScreen from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabBar: FC = () => {
  const styles = createStyles();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          let IconComponent = MaterialCommunityIcons;

          if (route.name === 'Payment') {
            iconName = focused ? 'wallet' : 'wallet-outline';
            IconComponent = Ionicons;
          } else {
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home-variant' : 'home-variant-outline';
                break;
              case 'Discover':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              case 'Profile':
                iconName = focused ? 'account' : 'account-outline';
                break;
              case 'Inbox':
                iconName = focused ? 'account' : 'account-outline';
                break;
              default:
                iconName = 'home-variant-outline';
            }
          }

          const animatedScale = focused ? 1.2 : 1;

          return (
            <Animated.View style={{transform: [{scale: animatedScale}]}}>
              <IconComponent
                name={iconName}
                size={SizeConfig.width * 6}
                color={focused ? '#7676dc' : '#A9A9A9'}
              />
            </Animated.View>
          );
        },
        tabBarButton: props => (
          <TouchableOpacity
            activeOpacity={0.8}
            delayLongPress={1000}
            {...props}
            style={
              route.name === 'Add' ? styles.addButtonContainer : props.style
            }
          />
        ),
        tabBarLabel: ({focused}) => {
          let label;
          switch (route.name) {
            case 'Home':
              label = 'Home';
              break;
            case 'Discover':
              label = 'Discover';
              break;
            case 'Inbox':
              label = 'Inbox';
              break;
            case 'Profile':
              label = 'Me';
              break;
            default:
              label = 'Home';
          }
          return (
            <Text
              style={[
                styles.iconText,
                {
                  color: focused ? '#7676dc' : '#A9A9A9',
                  fontFamily: Fonts.regular.fontFamily,
                },
              ]}>
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.addButton}>
              <Ionicons name="add" size={SizeConfig.width * 8} color="#fff" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

export const createStyles = () =>
  StyleSheet.create({
    tabBar: {
      height: SizeConfig.height * 10,
      backgroundColor: '#000',

      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 5,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 5,
      overflow: 'hidden',
    },
    addButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: SizeConfig.width * 14,
      height: SizeConfig.width * 14,
      backgroundColor: '#000',
      borderRadius: SizeConfig.width * 7,
      marginTop: -SizeConfig.height * 3,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
    },
    addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0050',
      width: SizeConfig.width * 12,
      height: SizeConfig.width * 12,
      borderRadius: SizeConfig.width * 6,
    },
    iconText: {
      fontSize: SizeConfig.width * 3.5,
      fontFamily: Fonts.regular.fontFamily,
    },
  });
