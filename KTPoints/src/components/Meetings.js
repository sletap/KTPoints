import React, { Component } from 'react';
import {Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Meetings = (props) => {
        const { 
            headerContentStyle,
            CategoryStyle,
            containerStyle,
            NumberStyle
        } = styles;

        
        return (
            <View>
                <Card>
                    <CardSection style = {containerStyle}>
                        <View style={headerContentStyle}>
                            <Text style={CategoryStyle}>Meetings Left:</Text>
                            <Text style={NumberStyle}>{props.meetingsLeft}</Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        );
};

const styles = {
    headerContentStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'space-around' 
    },
    CategoryStyle: {
        fontSize: 24,
        fontWeight: '400'
    },
    NumberStyle: {
        fontSize: 20,
        fontWeight: '250'
    },
    containerStyle: {
        // borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}
export default Meetings;