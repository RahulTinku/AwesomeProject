import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
        email:'',
        firstName:'',
        lastName:'',
        accountId:'',
        password:''
    }
  }
  updateValue(text, field){
    if(field == 'firstName'){
        this.setState({firstName:text,})
    }
    if(field == 'lastName'){
        this.setState({lastName:text,})
    }
    if(field == 'email'){
        this.setState({email:text,})
    }
    if(field == 'password'){
        this.setState({password:text,})
    }
    if(field == 'confirmPassword'){
        this.setState({confirmPassword:text,})
    }
    if(field == 'contact'){
        this.setState({contact:text,})
    }
  }
  register(){
    let collection = {}
    if(this.state.firstName && this.state.firstName !== '' && this.state.email && this.state.email !== ''
       && this.state.lastName && this.state.lastName !== '' && this.state.contact && this.state.contact !== ''
       && this.state.password && this.state.password !== '' && this.state.confirmPassword && this.state.confirmPassword !== ''){

       if(this.state.password == this.state.confirmPassword){
        collection.FirstName = this.state.firstName,
        collection.LastName = this.state.lastName,
        collection.Contact = this.state.contact,
        collection.Email = this.state.email,
        collection.Password = this.state.password

//        console.warn(collection)
        console.warn(JSON.stringify(collection))

        var url = 'http://172.30.45.23:8080/api/user/create';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => console.warn('Success:', JSON.stringify(response)))
        .catch(error => console.warn('Error:', error));
       }
       else{
        console.warn("Password and Confirm Password should match !")
       }


    }
    else{
        console.warn("Please fill all the fields !")
    }
//    collection.FirstName = this.state.firstName,
//    collection.Email = this.state.email
//    console.warn(collection)

  }
  render() {
    return (
      <ScrollView style={styles.signUp}>
        <Image style={styles.logo} source={require('../../images/logo_blue.png')} />
        <View style={styles.contentBox}>
            <Text style={styles.header}>Sign Up</Text>
            <TextInput style={styles.textInput} placeholder="First Name" onChangeText={(text)=>this.updateValue(text, 'firstName')}/>
            <TextInput style={styles.textInput} placeholder="Last Name" onChangeText={(text)=>this.updateValue(text, 'lastName')}/>
            <TextInput style={styles.textInput} placeholder="Contact" keyboardType={'numeric'} onChangeText={(text)=>this.updateValue(text, 'contact')}/>
            <TextInput style={styles.textInput} placeholder="Email" onChangeText={(text)=>this.updateValue(text, 'email')}/>
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>this.updateValue(text, 'password')}/>
            <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text)=>this.updateValue(text, 'confirmPassword')}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>this.register()}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.register()}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    signUp: {
        alignSelf: 'stretch',
    },
    logo: {
        alignSelf: 'center',
        height: 70,
        width: 170,
    },
    contentBox: {
         backgroundColor: '#00B6Ef17',
         borderRadius: 20,
         marginLeft: 15,
         marginRight: 15,
         padding: 15,
         paddingBottom: 20,
    },
    register: {
        backgroundColor: '#00b6ef',
    },
    header: {
        fontSize: 18,
        color: '#9A9A9A',
        paddingBottom: 7,
        alignSelf: 'center',
    },
    textInput: {
        alignSelf: 'stretch',
        marginBottom: 5,
        color: '#9A9A9A',
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: '#00427C'
    },
    buttonContainer: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#00427c',
        width: '30%',
        borderRadius: 10,
        height: 50,
    },
    btnText: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    }
})