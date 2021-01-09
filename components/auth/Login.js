import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
		this.onSingIn = this.onSingIn.bind(this)
	}

	onSingIn() {
		const { email, password } = this.state
		firebase
			.auth()
			.signInWithEmailAndPassword(email.trim(), password)
			.then((result) => {
				console.log(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder='email'
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					placeholder='password'
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button onPress={() => this.onSingIn()} title='Sing In' />
			</View>
		)
	}
}

export default Login
