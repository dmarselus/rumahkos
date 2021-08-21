import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
const colors = {
	primaryText: '#0d0d0f',
	negativeText: 'white',

	lightGrey: '#d6d6d6',

	primaryColor: '#7F48C3',
	primaryColorAlpha: 'rgba(127, 72, 195, 0.3)'
};

const size = {
	mediumRadius: 10,

	width,
	height
};

export { colors, size };
