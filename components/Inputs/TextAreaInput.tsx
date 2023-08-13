import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';

type Props = {
    style?: any;
    placeholder?: string;
    onChangeText?: any;
    editable?: boolean;
    value?: string;
    scrollEnabled?: boolean;
};

const TextAreaInput = ({ style, placeholder, onChangeText, editable, value, scrollEnabled }: Props) => {
    return (
        <View style={style}>
            <View style={[styles.inputWrapper]}>
                <TextInput
                    placeholderTextColor={'#8E8E8E'}
                    placeholder={placeholder}
                    style={[styles.textAreaInput]}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    multiline={true}
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                    editable={editable}
                    value={value}
                    numberOfLines={4}
                    scrollEnabled={scrollEnabled}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: Platform.OS === 'ios' ? 30 : 0,
    },
    textAreaInput: {
        fontSize: 16,
    },
});

export default TextAreaInput;
