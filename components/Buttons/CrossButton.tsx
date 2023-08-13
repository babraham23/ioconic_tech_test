import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

const CrossButton = ({ onPress, style }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.container]}>
            <EvilIcons name="close" size={18} color="black" />
        </TouchableOpacity>
    );
};

export default CrossButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
});
