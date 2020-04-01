import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

export default class MyEMS extends Component {

    constructor() {
        super()
        /*this.state = {
            showTab: true
        }*/
    }

    state = {
        showTab: true
    }

    state = {
        isOn: false
    }

    toggleHandle() {
        this.setState({ isOn: !this.state.isOn })
    }

    callFun() {
        if(this.state.isOn){
            return (
                <View style={{position: 'absolute', zIndex: 2}}>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Dashboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Updates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Data Refresh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Environment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Backups</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Cases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Preferences</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Reports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Text style={styles.buttonMenuList}>Help</Text>
                    </TouchableOpacity>
                </View>
            )
        } else{
            /*return (
                <Text>bcxnzm</Text>
            )*/

        }
    }

    selectedTab = (tabName) => {
//       this.state.showTab = tabName;
//        this.renderSelectedTab();
         this.setState({ showTab: tabName});
    }

    renderSelectedTab = () => {
//        console.warn(this.state.showTab);
        if(this.state.showTab){
            return(
                <View>
                    <Text
                        style={{
                        backgroundColor: '#00B6EF',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        fontWeight: '600'
                        }}>PowerSchool (Updates)</Text>
                    <View
                        style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff'
                        }}>
                        <Text style={{ width: '50%', marginTop: 5, marginRight: 5}}>Distribution Option</Text>
                        <TextInput
                            style={{
                                width: '50%', borderWidth: 1, height: 35,
                                paddingHorizontal: 10, borderRadius: 10
                            }}
                            placeholder="Enter"
                        />
                    </View>
                    <View
                        style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 10
                        }}>
                        <Text style={{ width: '50%', marginTop: 5, marginRight: 5}}>Preferred Start Time</Text>
                        <TextInput
                            style={{
                                width: '50%', borderWidth: 1, height: 35,
                                paddingHorizontal: 10, borderRadius: 10
                            }}
                            placeholder="Enter"
                        />
                    </View>
                    <View
                        style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff'
                        }}>
                        <Text style={{ width: '50%', marginTop: 5, marginRight: 5}}>Estimated End Time</Text>
                        <TextInput
                            style={{
                                width: '50%', borderWidth: 1, height: 35,
                                paddingHorizontal: 10, borderRadius: 10
                            }}
                            placeholder="Enter"
                        />
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else if(!this.state.showTab){
            return(
                <View>
                    <Text
                        style={{
                        backgroundColor: '#00B6EF',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        fontWeight: '600'
                        }}>PowerSchool (Updates)</Text>

                    <View
                        style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff'
                        }}>
                        <Text style={{ width: '50%', marginTop: 5, marginRight: 5}}>Select Version</Text>
                        <TextInput
                            style={{
                                width: '50%', borderWidth: 1, height: 35,
                                paddingHorizontal: 10, borderRadius: 10
                            }}
                            placeholder="Enter"
                        />
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Update Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    gotoDashboard = () => {
        this.props.navigator.push({
            name: 'dashboardPage'
       })
    }

    goBack = () => {
        this.props.navigator.push({
            name: 'loginPage'
       })
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.smartLogo}>
                    <TouchableOpacity  onPress={() => this.toggleHandle()}>
                        <Text style={styles.menu}> Menu </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.gotoDashboard.bind(this)}>
                        <Text style={styles.smartHeader}> vSmart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image
                            style={styles.userLogo}
                            source={require('../../images/profile.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>{this.callFun()}</View>
                <View style={styles.subHeader}>
                    <Text style={styles.headerName}>Updates</Text>
                </View>
                <View style={styles.tabList}>
                    <TouchableOpacity style={this.state.showTab?styles.activeTab:styles.tab} onPress={() => {this.selectedTab(true)}}>
                        <Text style={this.state.showTab?styles.activeTabName:styles.tabName}>Scheduled</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={!this.state.showTab?styles.activeTab:styles.tab} onPress={() => {this.selectedTab(false)}}>
                        <Text style={!this.state.showTab?styles.activeTabName:styles.tabName}>Immediate</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabData}>
                    {this.renderSelectedTab()}
                </View>

            </KeyboardAvoidingView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
//        backgroundColor: '#d3f3fd'
    },
    smartLogo: {
//        flex: 1,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        backgroundColor: '#00427C'
     },
     userLogo: {
         width: 25,
         height: 25,
         marginRight: 10,
         marginTop: 3,
         marginBottom: 3
     },
     smartHeader: {
         fontSize: 16,
         fontWeight: '600',
         color: '#fff',
         paddingHorizontal: 10,
         fontWeight: '600'
     },
     menu: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        paddingHorizontal: 5,
        paddingVertical: 2
     },
      subHeader: {
//         flex: 1,
         flexDirection: 'row',
         paddingVertical: 20,
         textAlign: 'center',
         justifyContent: 'center'
      },
      headerName: {
          color: '#00427C',
          fontSize: 18,
          fontWeight: '600'
      },
      tabList: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 20
      },
      tab: {
        backgroundColor: '#00427C',
      },
      activeTab: {
        backgroundColor: '#d3f3fd',
        borderWidth: 1,
        borderColor: '#00427C'
      },
      tabName: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
      },
      activeTabName: {
        color: '#00427C',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight: '600'
      },
      tabData: {
        backgroundColor: '#d3f3fd',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#00427C'
      },
      buttonContainer: {
          backgroundColor: '#00427C',
          paddingVertical: 10,
          margin: 10,
          borderRadius: 10
      },
      buttonText: {
          textAlign: 'center',
          color: '#ffffff',
          fontWeight: '700',
          paddingHorizontal: 20
      },
      buttonMenu: {
            width: 175,
            backgroundColor: '#d3f3fd',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: '#00427C',
            borderRadius: 5
      },
      buttonMenuList: {
  //          textAlign: 'center',
            color: '#00427C',
            fontWeight: '700',
            paddingHorizontal: 20
      }
});