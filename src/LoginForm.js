import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

export default class LoginForm extends Component {


    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content" />

                <TextInput
                    placeholder="Username or Email"
                    placeholderColor="rgba(255,255,255,0.8)"
//                    returnKeyType="Next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />

                <TextInput
                    placeholder="Password"
                    placeholderColor="rgba(255,255,255,0.8)"
                    secureTextEntry
//                    returnKeyType="Go"
                    ref={(input) => this.passwordInput = input}
                    style={styles.input} />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.validateFormInput.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>


            </View>
        );

    }

    validateFormInput = () => {
        Alert.alert("sdhasghj");
//        this.Component.navigator.push({
//            id: 'Dashboard'
//        });
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 10,
        color: "#ffffff",
        paddingHorizontal: 10,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#00427C'
    },
    buttonContainer: {
        backgroundColor: '#00427C',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    }
});