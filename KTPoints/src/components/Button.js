import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, buttonStyle, textStyle }) => {

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle} >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};
export default Button;
