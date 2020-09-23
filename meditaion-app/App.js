import React from 'react';
import { View, StyleSheet } from 'react-native';
import Heart from './assets/heart.svg';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Heart />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center'
	},
});
