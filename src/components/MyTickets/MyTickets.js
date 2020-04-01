import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Alert, Linking } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class MyTickets extends Component {

    constructor() {
        super()
    }

    componentWillMount(){
        /*var url = 'http://172.30.44.194:8080/auth/login';
//      var url = 'http://192.168.0.102:8080/auth/login;

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
//            console.warn(responseJson);
              this.getAccountDetails();
        })
        .catch((error) => {
            console.warn(error);
        });*/
        /*Alert.alert('Sign in to Sales Force in Brower and come back to the application');*/
        Linking.openURL('http://172.30.0.170:8080/auth/login');
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

    state = {
        isOn: false,
        selectedTabValue: 'account',
        accountData: {}
    }

    caseReason = [{
        value: 'Performance'},{
        value: 'Implementation'},{
        value: 'Customization'},{
        value: 'Other Reason'
    }]

    toggleHandle() {
        this.setState({ isOn: !this.state.isOn })
    }

    callFun() {
        if(this.state.isOn){
            return (
                <View style={{position: 'absolute', zIndex: 1}}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>My Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>My Tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Create New Ticket</Text>
                    </TouchableOpacity>
                </View>
            )
        } else{
            /*return (
                <Text>bcxnzm</Text>
            )*/

        }
    }

    getAccountDetails() {
//        this.state.accountData = 'msndm';
//        console.warn(this.state.accountData);
    }

    selectedTab = (tabName) => {
    //       this.state.showTab = tabName;
    //        this.renderSelectedTab();
             this.setState({ selectedTabValue: tabName});
        }

        renderSelectedTab = () => {
    //        console.warn(this.state.showTab);
            if(this.state.selectedTabValue == 'account'){
                this.getAccountDetails();
                return(
                    <View>
                        <Text>Account</Text>
                    </View>
                );
            } else if(this.state.selectedTabValue == 'tickets'){
                return(
                    <View>
                        <Text>Tickets</Text>
                    </View>
                );
            } else if(this.state.selectedTabValue == 'create'){
                  return(
                    <View style={{marginBottom: 100}}>
                      <ScrollView style={{alignSelf: 'stretch'}}>
                           <View>
                                <Text style={{color: '#00427C', fontWeight: '600'}}>Case Reason</Text>
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholder='Reasons'
                                    style={{height: 40, fontSize: 14}}
                                    data={[{
                                          value: 'EMS'
                                    }]}
                                  />
                           </View>

                           <View>
                                 <Text style={{color: '#00427C', fontWeight: '600'}}>Owner Name</Text>
                                 <TextInput
                                   placeholder="Contact Name"
                                   placeholderColor="rgba(255,255,255,0.8)"
                                   secureTextEntry
                                   style={styles.input} />
                           </View>

                           <View>
                               <Text style={{color: '#00427C', fontWeight: '600'}}>Subject</Text>
                               <TextInput
                                 placeholder="Write a Subject"
                                 placeholderColor="rgba(255,255,255,0.8)"
                                 secureTextEntry
                                 style={styles.input} />
                           </View>

                           <View>
                                 <Text style={{color: '#00427C', fontWeight: '600'}}>Description</Text>
                                 <TextInput
                                   placeholder="Description"
                                   placeholderColor="rgba(255,255,255,0.8)"
                                   secureTextEntry
                                   style={styles.input}
                                   numberOfLines={5}
                                   multiline={true}/>
                           </View>

                           <View>
                               <Text style={{color: '#00427C', fontWeight: '600'}}>Priority</Text>
                               <Dropdown
                                   placeholder='Priority'
                                   data={[{
                                         value: 'Low'},{
                                         value: 'Medium'},{
                                         value: 'High'}]}
                               />
                           </View>

                           <View>
                               <Text style={{color: '#00427C', fontWeight: '600'}}>Account Name</Text>
                               <TextInput
                                 placeholder="Account Name"
                                 placeholderColor="rgba(255,255,255,0.8)"
                                 secureTextEntry
                                 style={styles.input} />
                           </View>

                           <View style={{color: '#00427C', fontWeight: '600'}}>
                              <Text style={{color: '#00427C', fontWeight: '600'}}>Contact Name</Text>
                              <TextInput
                                placeholder="Contact Name"
                                placeholderColor="rgba(255,255,255,0.8)"
                                secureTextEntry
                                style={styles.input} />
                           </View>


                           <TouchableOpacity style={styles.buttonCreate}>
                               <Text style={styles.createButton}>Submit</Text>
                           </TouchableOpacity>
                       </ScrollView>
                     </View>
                  );
             }
        }

    render() {

        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.smartLogo}>
                    <TouchableOpacity onPress={() => this.toggleHandle()}>
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

                <View>
                    <TouchableOpacity style={{height: 0}}
                      onPress={() => this.toggleHandle()}>
                        <Text></Text>
                    </TouchableOpacity>
                </View>

                <View>{this.callFun()}</View>
                <View style={styles.tabList}>
                    <TouchableOpacity style={this.state.selectedTabValue == 'account'?styles.activeTab:styles.tab} onPress={() => {this.selectedTab('account')}}>
                        <Text style={this.state.selectedTabValue == 'account'?styles.activeTabName:styles.tabName}>My Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.selectedTabValue == 'tickets'?styles.activeTab:styles.tab} onPress={() => {this.selectedTab('tickets')}}>
                        <Text style={this.state.selectedTabValue == 'tickets'?styles.activeTabName:styles.tabName}>My Tickets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.selectedTabValue == 'create'?styles.activeTab:styles.tab} onPress={() => {this.selectedTab('create')}}>
                        <Text style={this.state.selectedTabValue == 'create'?styles.activeTabName:styles.tabName}>New Ticket</Text>
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
        borderRightWidth: 1,
        borderColor: '#fff'
      },
      activeTab: {
        backgroundColor: '#d3f3fd',
//        borderWidth: 1,
//        borderColor: '#00427C'
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
        borderColor: '#00427C',
        paddingHorizontal: 10,
        paddingVertical: 5
      },
      buttonContainer: {
          width: 175,
          backgroundColor: '#d3f3fd',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#00427C',
          borderRadius: 5
      },
      buttonText: {
//          textAlign: 'center',
          color: '#00427C',
          fontWeight: '700',
          paddingHorizontal: 20
      },
      buttonCreate: {
        width: 175,
          backgroundColor: '#00427C',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#00427C',
          borderRadius: 5
      },
      createButton: {
        textAlign: 'center',
          color: '#fff',
          fontWeight: '700',
          paddingHorizontal: 20
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
       dropdown: {
            height: 40,
    //        backgroundColor: '#fff',
           marginBottom: 10,
    //        color: "#ffffff",
           paddingHorizontal: 10,
           fontSize: 14,
           borderBottomWidth: 1,
           borderColor: '#00427C',
           width: '90%'
       }
});