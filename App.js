import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyCOCtIZyiXMmWt8tGEPINQ2TYrhpA39WC0',
	authDomain: 'instrn-55157.firebaseapp.com',
	projectId: 'instrn-55157',
	storageBucket: 'instrn-55157.appspot.com',
	messagingSenderId: '49856435660',
	appId: '1:49856435660:web:c4ea7f2ba018c39525f969',
	measurementId: 'G-FY7L7C8QJ7',
}

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'

const Stack = createStackNavigator()
export class App extends Component {
	constructor(props) {
		super(props)
		this.state = { loaded: false }
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				this.setState({ loggedIn: false, loaded: true })
			} else {
				this.setState({ loggedIn: true, loaded: true })
			}
		})
	}

	render() {
		const { loggedIn, loaded } = this.state

		if (!loaded) {
			return (
				<View>
					<Text>loading</Text>
				</View>
			)
		}

		if (!loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator initialRouteName='Landing'>
						<Stack.Screen
							name='Landing'
							component={LandingScreen}
							options={{ headerShown: false }}
						></Stack.Screen>
						<Stack.Screen
							name='Register'
							component={RegisterScreen}
						></Stack.Screen>
						<Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
					</Stack.Navigator>
				</NavigationContainer>
			)
		}

		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text>User is logged in</Text>
			</View>
		)
	}
}

export default App
