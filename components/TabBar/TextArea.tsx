import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextAreaInput from '../Inputs/TextAreaInput';
import SendButton from '../Buttons/SendButton';

interface Props {
    placeholder?: string;
    onChangeText?: any;
    value?: string;
    onSubmitEditing?: any;
}

const TextArea = ({ placeholder, onChangeText, value, onSubmitEditing }: Props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TextAreaInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
                <SendButton style={styles.sendButton} onPress={onSubmitEditing} />
            </View>
        </View>
    );
};

export default TextArea;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#e8e8e8',
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 50 : 20,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sendButton: {
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
});
