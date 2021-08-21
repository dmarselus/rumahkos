import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, size } from '../constant';
import { ThemeText } from '.';
export default function Button({ onPress, title = '', secondary = false, style = {} }) {
	if (secondary)
		return (
			<TouchableOpacity style={[ styles.base, { ...style } ]} onPress={onPress}>
				<ThemeText style={{ color: colors.primaryColor }} text={title} />
			</TouchableOpacity>
		);
	else
		return (
			<TouchableOpacity style={[ styles.base, styles.primaryButton, { ...style } ]} onPress={onPress}>
				<ThemeText style={{ color: colors.negativeText }} text={title} />
			</TouchableOpacity>
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
		borderColor: colors.primaryColor
	},
	primaryButton: {
		backgroundColor: colors.primaryColor
	}
});
