import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {


    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.loginscreen}>
                <View style={styles.loginLogo}>
                    <Image
                        source={require('../../images/logo.png')} />
                        <Text style={styles.smartText}>vSMART</Text>
                </View>
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

                       <TouchableOpacity style={styles.buttonContainer}>
                           <Text style={styles.buttonText}>Login</Text>
                       </TouchableOpacity>

                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );

    }

    /*validateFormInput = () => {
            Alert.alert("sdhasghj");
    //        this.Component.navigator.push({
    //            id: 'Dashboard'
    //        });
    }*/
}

const styles = StyleSheet.create({
    loginscreen: {
        flex: 1,
        backgroundColor: '#00B6EF'
    },
    loginLogo: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    smartText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 26,
        marginTop: 20
    },
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