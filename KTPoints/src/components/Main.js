import React from 'react'
import { View } from 'react-native'
import Points from './Points'
import Header from './Header'

const Main = () => {
    return (
        <View>
            <Header HeaderText='Welcome User!'/>
            <Points/>
        </View>
    );
}

export default Main;
