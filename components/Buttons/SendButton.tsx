import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SendButton = ({ onPress, style }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.container]}>
            <FontAwesome name="send-o" size={18} color="white" />
        </TouchableOpacity>
    );
};

export default SendButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        paddingRight: 3,
    },
});
