import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignUpScreen } from '../screens';

const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		</Stack.Navigator>
	);
}
