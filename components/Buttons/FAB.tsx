import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome, Foundation } from '@expo/vector-icons';

const FAB = ({ onPress, style, pencil }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.container]}>
            {pencil ? <Foundation name="pencil" size={24} color="white" /> : <FontAwesome name="send-o" size={18} color="white" />}
        </TouchableOpacity>
    );
};

export default FAB;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: 'black',
        paddingRight: 3,
    },
});
