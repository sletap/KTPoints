import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        //borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#2c3e50',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#fff',
        position: 'relative'
    }
};
export default CardSection;
