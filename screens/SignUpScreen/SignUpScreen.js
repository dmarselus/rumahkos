import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, ThemeText } from '../../components';
export default function SignUpScreen({ navigation }) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
			<Input label="Email Address" value={email} setValue={setEmail} />
			<Input label="Password" value={password} setValue={setPassword} secureTextEntry />
			<Button onPress={() => console.log('signup')} title="Create Acccunt" />
			<Button secondary onPress={() => navigation.navigate('LoginScreen')} title="Already have an account" />
		</View>
	);
}
