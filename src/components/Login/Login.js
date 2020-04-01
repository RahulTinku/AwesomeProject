import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert, ImageBackground } from 'react-native';
//import axios from 'axios';

export default class Login extends Component {

    constructor() {
        super()
        this.state={
            name:'',
            password:''
        }

//        this.navigate = this.navigate.bind(this)
        this.validateFormInput = this.validateFormInput.bind(this);
        this.loadSignUp = this.loadSignUp.bind(this);
    }

    /*navigate(route) {
        this.props.navigation.push({
            name
        })
    }*/

    loadSignUp() {
        this.props.navigator.push({
            name: 'signupPage'
        })
    }

    validate(text, type) {
//        alph=/^[a-zA-Z]+$/
        if(type === 'username'){
            this.state.name = text;
        } else if(type === 'password'){
            this.state.password = text;
        }
    }

    render() {
        return(

            /*<ImageBackground
                style={styles.backgroundImage}
                source={require('../../images/login_background.png')}>*/
                <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer} enabled>
                    <View style={styles.loginscreen}>
                    <View style={styles.loginLogo}>
                        <Image
                            style={styles.logoBlue}
                            source={require('../../images/logo_blue.png')} />
                            <Text></Text>
                    </View>
                    <View style={styles.container}>
                        <StatusBar
                             barStyle="light-content" />
                        <View style={styles.username}>
                             <Image
                                style={styles.userIcon}
                                source={require('../../images/user_icon.png')} />

                             <TextInput
                                placeholder="Username or Email"
                                placeholderColor="rgba(255,255,255,0.8)"
            //                    returnKeyType="Next"
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(text)=>this.validate(text,'username')}
                                style={styles.input} />
                          </View>

                          <View style={styles.password}>
                               <Image
                                  style={styles.passwordIcon}
                                  source={require('../../images/Password_icon.png')} />
                              <TextInput
                                  placeholder="Password"
                                  placeholderColor="rgba(255,255,255,0.8)"
                                  secureTextEntry
              //                    returnKeyType="Go"
                                  ref={(input) => this.passwordInput = input}
                                  onChangeText={(text)=>this.validate(text,'password')}
                                  style={styles.input} />
                           </View>

                           <TouchableOpacity style={styles.buttonContainer} onPress={this.validateFormInput.bind(this)}>
                               <Text style={styles.buttonText}>Login</Text>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={this.loadSignUp.bind(this)}>
                                <Text style={styles.btnSignup}>Not a member ? SignUp Now</Text>
                           </TouchableOpacity>
                    </View>
                    </View>
                </KeyboardAvoidingView>
                </ScrollView>
//           </ImageBackground>

        );

    }

    validateFormInput = () => {

            var url = 'http://172.30.44.194:8080/api/user/login?Username='+this.state.name+'&Password='+this.state.password;
//            var url = 'http://192.168.0.102:8080/api/user/login?Username='+this.state.name+'&Password='+this.state.password;

            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson === null){
                    console.warn('Incorrect Username or Password');
                } else{
                    this.props.navigator.push({
                        name: 'dashboardPage'
                    })
                }
            })
            .catch((error) => {
                console.warn('Incorrect Username or Password')
            });

    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        flexDirection: 'row'
    },
    password: {
        flexDirection: 'row'
    },
    userIcon: {
        width: 25,
        height: 25,
        marginTop: '3%'
    },
    passwordIcon: {
        width: 25,
        height: 25,
        marginTop: '3%'
    },
    loginscreen: {
        flex: 1,
        backgroundColor: '#d3f3fd',
        fontFamily: 'Roboto',
        margin: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
//        marginTop: '25%',
//        marginBottom: '25%'

    },
    logoBlue: {
        width: 250,
        height: 75,
        marginTop: 10
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
//        backgroundColor: '#fff',
        marginBottom: 10,
//        color: "#ffffff",
        paddingHorizontal: 10,
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: '#00427C',
        width: '90%'
    },
    buttonContainer: {
        backgroundColor: '#00427C',
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    },
    btnSignup: {
        color: '#00427C',
        textAlign: 'center',
        fontWeight: '600',
        margin: 20
    }
});