import React, { Component } from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios'
import Header from './Header';
import Moment from 'moment';




class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentWillReceiveProps(props) {
        let temp = [];
        for (i = 0; i < props.tasks.length; i ++) {
            innerTemp = [];
            innerTemp.push(props.tasks[i]['fields']['date']['timestampValue']);
            innerTemp.push(props.tasks[i]['fields']['name']['stringValue']);
            innerTemp.push(props.tasks[i]['fields']['points']['integerValue']);
            temp.push(innerTemp)
        }
        this.setState({tasks: temp})
    }
    
    render() {
        const listTasks = this.state.tasks
      .map(resultItem => (
        <View key={resultItem[1]}>
            <Card style={styles.containerStyle}>
                <CardSection style={styles.containerStyle}>
                <View style={styles.headerContentStyle}>
                            <Text style={styles.CategoryStyle}>{resultItem[1]}</Text>
                        </View>
                </CardSection>
                <CardSection style={styles.containerStyle}>
                <View style={styles.headerContentStyle}>
                            <Text style={styles.CategoryStyle}>{Moment(resultItem[0]).format('hh:mm a M/DD/YYYY')}</Text>
                        </View>
                </CardSection>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.CategoryStyle}>{resultItem[2]} Points</Text>
                    </View>
                </CardSection>
            </Card>
        </View>
    ));

        return (
            <View>
                <Card style={styles.containerStyle}>
                        <Text style={styles.header_text}>Upcoming Tasks:</Text>
                        {listTasks}
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
        color: '#2980b6',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2980b6',
       color: '#fff'
    },
    text_style:{
         fontSize: 18,
         textAlign: 'center',
         color: '#2980b6'
      },
    header_text:{
        textDecorationLine: 'underline',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },
      headerContentStyle: {
        flex: 1,
        backgroundColor: '#2980b6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' 
    },
    CategoryStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff'
    },
    NumberStyle: {
        fontSize: 20,
        fontWeight: '200'
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#2980b6',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderColor: '#fff',
        position: 'relative'
    },

});

export default Upcoming;