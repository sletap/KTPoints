import React, { Component } from 'react';
import {Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class Points extends Component {
    render() {
        const { 
            headerContentStyle,
            PointTextStyle,
            containerStyle
        } = styles;
        return (
            <View>
                <Card>
                    <CardSection style={containerStyle}>
                        <View style={headerContentStyle}>
                            <Text style={PointTextStyle}>Points:</Text>
                            <Text>10</Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    headerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PointTextStyle: {
        fontSize: 18
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
export default Points;