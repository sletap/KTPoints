import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


class Menu extends Component {
    
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Card>
                    <CardSection>
                        <Button style={styles.buttonContainer}
                            onPress={() => navigate('MainScreen')}
                        >
                        Main
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button style={styles.buttonContainer}
                            onPress={() => navigate('LoginScreen')}
                        >
                        Logout
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Menu;