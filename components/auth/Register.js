import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			name: '',
		}
		this.onSingUp = this.onSingUp.bind(this)
	}

	onSingUp() {
		const { email, password, name } = this.state
		console.log(email, password)
		firebase
			.auth()
			.createUserWithEmailAndPassword(email.trim(), password)
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
					placeholder='name'
					onChangeText={(name) => this.setState({ name })}
				/>
				<TextInput
					placeholder='email'
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					placeholder='password'
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button onPress={() => this.onSingUp()} title='SingUp' />
			</View>
		)
	}
}

export default Register
