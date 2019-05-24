//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar,KeyboardAvoidingView,Image} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as firebase from "firebase";


  
// create a component
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        error: null
    }
    

    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: '#2c3e50',
        },
        headerTintColor: '#fff',
    };


    handleSignUp = () => {
        const {navigate} = this.props.navigation;
        console.log("In handle login")
        if (this.state.password == this.state.password2) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => this.setState({errorMessage: error.message}))
            .then(() => navigate('LoginScreen'));
            Alert.alert('Sign Up Successful!');
        }
        else {
            Alert.alert('Invalid Sign Up Credentials',
                        'Please Try Again',);
        }
    }

    invalidLogin = () => {
        Alert.alert(
            'Invalid Sign Up Credentials',
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

    submitPassword2 = () => {
        console.log(this.state.password2)
    }

    updatePassword2 = (text) => {
        this.setState({password2: text})
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
        <KeyboardAwareScrollView 
            style={{ backgroundColor: '#4c69a5' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            extraScrollHeight={20}
            enableOnAndroid={false}
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
                            placeholder='Email' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input} 
                           value={this.state.password}  
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           onChangeText={(password) => this.updatePassword(password)} 
                           onSubmitEditing={() => { this.handleSignUp();}}
                           placeholder='Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>
                
                <TextInput style = {styles.input} 
                           value={this.state.password2}  
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           onChangeText={(password2) => this.updatePassword2(password2)} 
                           onSubmitEditing={() => { this.handleSignUp();}}
                           placeholder='Confirm Password' 
                           placeholderTextColor='rgba(225,225,225,0.7)' 
                           secureTextEntry/>

                <Button style={styles.buttonContainer}
                    title='Create Account'
                    onPress={() => {this.handleSignUp();}}
                    color={'#063852'}
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
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#fff',
       color: '#fff'
    }
});

//make this component available to the app
export default SignUp;
