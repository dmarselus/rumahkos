import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NetworkProvider } from 'react-native-offline';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';
export default function App() {
	return (
		<NavigationContainer>
			<NetworkProvider>
				<AuthStack />
				{/* <View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</View> */}
			</NetworkProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
