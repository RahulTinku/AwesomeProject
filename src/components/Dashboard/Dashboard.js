import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';

export default class Dashboad extends Component {

    constructor(){
        super()

        this.loadEMS = this.loadEMS.bind(this);
        this.loadTickets = this.loadTickets.bind(this);
    }

    loadEMS = () => {
        this.props.navigator.push({
            name: "emsPage"
        });
    }

    loadTickets = () => {
        this.props.navigator.push({
            name: "ticketsPage"
        });
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.smartLogo}>
                    <TouchableOpacity>
                        <Text style={styles.smartHeader}> vSmart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image
                            style={styles.userLogo}
                            source={require('../../images/profile.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={styles.dashboardHeader}>Dashboad</Text>
                </View>

                <View style={styles.rowContent}>

                    <TouchableOpacity style={styles.optionsList} onPress={this.loadEMS.bind(this)}>
                        <Text style={styles.options}>My EMS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionsList} onPress={this.loadTickets.bind(this)}>
                        <Text style={styles.options}>My Tickets</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rowContent}>
                    <TouchableOpacity style={styles.optionsList}>
                        <Text style={styles.options}>Updates</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionsList}>
                        <Text style={styles.options}>Community</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );

    }

    goBack = () => {
        this.props.navigator.push({
            name: 'loginPage'
       })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3f3fd'
    },
    smartLogo: {
//        flex: 1,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        backgroundColor: '#00427C'
    },
    header: {
        marginTop: 100
    },
    dashboardHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: '#00427C',
        paddingVertical: 10,
        fontWeight: '600'
    },
    userLogo: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 3
    },
    smartHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        paddingHorizontal: 10,
        fontWeight: '600'
    },
    rowContent: {
//        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'center'
    },
    optionsList: {
        margin: 10
    },
    options: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        borderWidth: 2,
        fontSize: 16,
        width: 150,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: '#00427C'
    }
});