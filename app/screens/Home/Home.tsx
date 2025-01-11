import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RouteTypes';

interface home {
	navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen: FC<home> = ({navigation}) => {
	return (
		<View>
			<Text>Home</Text>
		</View>
	)
}

export default HomeScreen;

const styles = StyleSheet.create({})