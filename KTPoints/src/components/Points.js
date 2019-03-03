import React, { Component } from 'react';
import {Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class Points extends Component {
    render() {
        const { 
            headerContentStyle,
            PointTextStyle
        } = styles;
        return (
            <View>
                <Card>
                    <CardSection>
                        <View style={headerContentStyle}>
                            <Text style={PointTextStyle}>Points:</Text>
                            <Text>10 / 100</Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    headerContentStyle: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PointTextStyle: {
        fontSize: 18
    },
}
export default Points;