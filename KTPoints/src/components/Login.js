//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar,KeyboardAvoidingView,Image} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as firebase from "firebase";


  
// create a component
class Login extends Component {
    state = {
        username: '',
        password: '',
        auth: 1, 
    }
    

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#2c3e50',
        },
        headerTintColor: '#fff',
    };


    handleLogin = () => {
        const {navigate} = this.props.navigation;
        console.log("In handle login")
        var legit = 10
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((response) => {
            // Handle Errors here.
            uniq = this.state.username.split('@')[0]
            navigate('MainScreen', {
                uniqname: uniq,
            })
            console.log("Right")
            legit = 0
            // ...
          }).catch(function(error) {
            Alert.alert(
                'Invalid Login Credentials',
                'Please Try Again',
            );   // Using this line
        });
    }

    invalidLogin = () => {
        Alert.alert(
            'Invalid Login Credentials',
            'Please Try Again',);
    }

    submitUsername = () => {
        console.log(this.state.username)
    }

    updateUsername = (text) => {
        this.setState({username: text})
    }

    submitPassword = () => {
        console.log(this.state.password)
    }

    updatePassword = (text) => {
        this.setState({password: text})
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
        <KeyboardAwareScrollView 
            style={{ backgroundColor: '#4c69a5' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
            extraScrollHeight={20}
            enableOnAndroid={true}
        >
                <View style={styles.loginContainer}>
                    <Image source={require('./images/ktpLogo.png')}  style={styles.logo}/>
                </View>
               <View style={styles.formContainer}>
               <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => {this.passwordInput.focus(); this.submitUsername()}}
                            onChangeText={(username) => this.updateUsername(username)} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Mobile Num' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input} 
                           value={this.state.password}  
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           onChangeText={(password) => this.updatePassword(password)} 
                           onSubmitEditing={() => { this.submitPassword();}}
                           placeholder='Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>
                 {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
              {/* <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('HelloWorldScreen')}
                    >
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>  */}
                <Button style={styles.buttonContainer}
                    title='Login'
                    onPress={() => {this.handleLogin();}}
                    />
               </View>
               
         
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer:{
        paddingBottom: 10,
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 20,
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2980b6',
       color: '#fff'
    }
});

//make this component available to the app
export default Login;
