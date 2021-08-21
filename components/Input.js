import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { ThemeText } from '.';
import { colors, size } from '../constant';

import { Input as ElementInput } from 'react-native-elements';

export default function Input({ value, setValue, label = false, ...rest }) {
	return (
		<ElementInput
			errorStyle={{ color: 'red' }}
			label={label}
			// errorMessage="ENTER A VALID ERROR HERE"
			value={value}
			onChangeText={setValue}
			{...rest}
		/>
		// <View>
		// 	{label && <ThemeText text={label} />}
		// 	<TextInput value={value} onChangeText={setValue} style={styles.base} {...rest} />
		// </View>
	);
}

const styles = StyleSheet.create({
	base: {
		backgroundColor: colors.lightGrey,
		width: size.width * 0.8,
		paddingVertical: '2%',
		paddingHorizontal: '4%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: size.mediumRadius
	}
});
