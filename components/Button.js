import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, size } from '../constant';
import { ThemeText } from '.';
import { Button as ElementButton } from 'react-native-elements';
export default function Button({ onPress, title = '', type = 'solid', style = {} }) {
	return (
		<ElementButton
			title={title}
			type={type}
			onPress={onPress}
			buttonStyle={[ styles.base, styles[type], { ...style } ]}
		/>
	);
}

const styles = StyleSheet.create({
	base: {
		width: size.width * 0.8,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: size.mediumRadius,
		borderWidth: 1,
		borderColor: colors.primaryColor,
		backgroundColor: 'transparent'
	},
	solid: {
		backgroundColor: colors.primaryColor
	}
});
