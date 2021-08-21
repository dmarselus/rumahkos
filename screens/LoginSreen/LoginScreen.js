import React, { useState } from 'react';
import { View, Text } from 'react-native';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { Button, Input, ThemeText } from '../../components';
// GoogleSignin.configure();
export default function LoginScreen({ navigation }) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
			<Input label="Email Address" value={email} setValue={setEmail} />
			<Input label="Password" value={password} setValue={setPassword} secureTextEntry />
			<Button onPress={() => navigation.navigate('SignUpScreen')} title="Login" />
			<Button secondary onPress={() => navigation.navigate('SignUpScreen')} title="Create New Account" />
			{/* <GoogleSigninButton
				style={{ width: 192, height: 48 }}
				size={100}
				// color={GoogleSigninButton.Color.Dark}
				onPress={() => console.log('dasdas')}
				// disabled={this.state.isSigninInProgress}
			/> */}
		</View>
	);
}
