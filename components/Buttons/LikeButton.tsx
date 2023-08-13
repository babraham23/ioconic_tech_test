import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const LikeButton = ({ onPress, style, liked }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.container]}>
            {liked ? <AntDesign name="heart" size={24} color="#E81224" /> : <AntDesign name="hearto" size={24} color="#E81224" />}
        </TouchableOpacity>
    );
};

export default LikeButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
});
