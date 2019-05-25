import React, { Component } from 'react';
import { View, Image,Text, ScrollView,Dimensions } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from './styles/tweaks.js';
import Header from './Header';
import Button from './Button';



class AboutMe extends Component {
    state = {data: this.props.navigation.state.params.data};

    componentWillMount(){
       console.log(this.state.data);
    }
    
    static navigationOptions = {
        headerTintColor: '#2c3e50',
        headerStyle: {
            shadowColor: 'transparent',
            backgroundColor: '#ffffff',
            borderBottomWidth: 0,
        },
    };

    render() {
        //If viewing your own account
        bottom_Buttons = (
            <View>
                <Card>
                    <CardSection style = {styles.changePassword}>
                        <View style={styles.headerContentStyle}>
                        <Button style={styles.buttonContainer} onPress={() => {}}>
                            <Text style = {[styles.text_style, styles.centerContent]}>Change Password</Text>
                        </Button>
                        </View>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                        <Button style={styles.buttonContainer} onPress={() => {}}>
                            <Text style = {[styles.text_style, styles.centerContent]}>Edit</Text>
                        </Button>
                        </View>
                    </CardSection>
                </Card>
            </View>
        );

        const barWidth = Dimensions.get('screen').width - 30;
        return (
            <ScrollView styles="styles.fullScreen">
                <LinearGradient 
                    colors={['#ffffff', '#a8dbff']}
                    style="styles.gradientBackground">
                    <View style =  {styles.last_item}>
                        <View style={styles.imageContainer}>
                            <Image 
                            style={styles.mask}
                            source={{uri: this.state.data.img}}
                            />
                            <Text style = {styles.userName}>{this.state.data.name} 
                            </Text>
                            <Text style = {styles.userStatus}>{this.state.data.standing} 
                            </Text>
                        </View>
                        <Card>
                            <CardSection>
                                <Text style = {[styles.text_style, styles.iconPadding]}>Major: {this.state.data.major} 
                                </Text>
                            </CardSection>
                            <CardSection>
                                <Text style = {styles.text_style}>Grade: {this.state.data.year} 
                                </Text>
                            </CardSection>
                            <CardSection>
                                <Text style = {styles.text_style}>Pledge Class: {this.state.data.pc}
                                </Text>
                            </CardSection>
                        </Card>
                        <Card>
                            <CardSection>
                                <View style={styles.headerContentStyle}>
                                    <Text style = {[styles.text_style, styles.centerContent]}>About</Text>
                                </View>
                            </CardSection>
                            <CardSection>
                                <Text style = {styles.text_style}> 
                                    Lorem ipsum dolor amet mlkshk 
                                    YOLO raclette four loko yuccie vaporware 
                                    meditation cliche man bun tattooed craft beer taiyaki   
                                </Text>
                            </CardSection>
                        </Card>
                        <Card>
                            <CardSection>
                                <Text style = {styles.text_style}>Current Points: {this.state.data.points}</Text>
                            </CardSection>
                        
                            <CardSection>
                                <Text style = {styles.text_style}>Meetings Left: {this.state.data.meetingsLeft}</Text>
                            </CardSection>
                        </Card>
                        <Card>
                            <CardSection>
                                <FontAwesome style={[styles.text_style, styles.iconPadding, styles.phonePadding]}>{Icons.mobileAlt}</FontAwesome>
                                <Text style = {styles.text_style}> 123-456-7890</Text>
                            </CardSection>
                            <CardSection>
                                <FontAwesome style={[styles.text_style, styles.iconPadding]}>{Icons.envelope}</FontAwesome>
                                <Text style = {styles.text_style}> generic@umich.edu </Text>
                            </CardSection>
                        </Card>
                        {bottom_Buttons}
                    </View>
                </LinearGradient>
            </ScrollView>
        );
    }

}


export default AboutMe;