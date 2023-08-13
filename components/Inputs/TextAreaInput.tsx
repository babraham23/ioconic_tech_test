import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';

type Props = {
    style?: any;
    placeholder?: string;
    onChangeText?: any;
    editable?: boolean;
    value?: string;
    scrollEnabled?: boolean;
    numberOfLines?: number;
    height?: number;
};

const TextAreaInput = ({ style, placeholder, onChangeText, editable, value, height }: Props) => {
    return (
        <View style={style}>
            <View style={[styles.inputWrapper]}>
                <TextInput
                    placeholderTextColor={'#8E8E8E'}
                    placeholder={placeholder}
                    style={[styles.textAreaInput, { height }]}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    multiline={true}
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                    editable={editable}
                    value={value}
                    numberOfLines={2}
                    scrollEnabled={false}
                    maxLength={100}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: Platform.OS === 'ios' ? 30 : 0,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#888',
        padding: 8,
    },
    textAreaInput: {
        fontSize: 16,
    },
});

export default TextAreaInput;
