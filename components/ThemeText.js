import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constant';
export default function ThemeText({ text, type = 'normal', style = {} }) {
	return <Text style={[ { color: colors.primaryText }, styles[type], { ...style } ]}>{text}</Text>;
}

const styles = StyleSheet.create({
	normal: {
		fontSize: 17
	}
});
