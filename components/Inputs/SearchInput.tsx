import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ style, placeholder, autoCapitalize, onChangeText, onEndEditing, autoCorrect, keyboardType, spellCheck, onFilterPress }: any) => {
    return (
        <View style={[style, styles.wrapper]}>
            <View style={[styles.iconWrapper]}>
                <FontAwesome name={'search'} color={'black'} size={20} style={styles.icon} />
            </View>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                style={[styles.textInput, { color: 'black' }]}
                autoCapitalize={autoCapitalize}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                spellCheck={spellCheck}
                underlineColorAndroid="transparent"
            />

            <TouchableOpacity activeOpacity={0.7} onPress={onFilterPress} style={[styles.filter]}>
                <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderWidth: 0.5,
        height: 60,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#8E8E8E',
    },
    iconWrapper: {
        paddingLeft: 5,
        paddingRight: 10,
        paddingTop: 5,
    },
    icon: {
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 15,
    },
    textInput: {
        flex: 1,
        paddingLeft: 1,
        fontSize: 18,
    },
    filter: {
        marginRight: 10,
    },
});

export default SearchInput;
