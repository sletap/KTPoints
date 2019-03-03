import React, { Component } from 'react';
import {Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Points = (props) => {
        const { 
            headerContentStyle,
            CategoryStyle,
            containerStyle,
            NumberStyle
        } = styles;

        let math = 100 - props.Points;

        return (
            <View>
                <Card>
                    <CardSection style={containerStyle}>
                        <View style={headerContentStyle}>
                            <Text style={CategoryStyle}>Points Earned:</Text>
                            <Text style={NumberStyle}>{props.Points}</Text>
                        </View>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection style = {containerStyle}>
                        <View style={headerContentStyle}>
                            <Text style={CategoryStyle}>Points Needed:</Text>
                            <Text style={NumberStyle}>{math}</Text>
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
        fontWeight: '400',
        color: '#fff'
    },
    NumberStyle: {
        fontSize: 20,
        fontWeight: '200',
        color: '#fff'
    },
    containerStyle: {
        // borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#2980b6',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}
export default Points;