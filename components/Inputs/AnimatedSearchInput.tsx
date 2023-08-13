import React from 'react';
import { Animated, Platform, StyleSheet } from 'react-native';
import SearchInput from './SearchInput';

type Props = {
    scrollYValue?: any;
    onChangeText?: any;
    placeholder?: string;
    onFilterPress?: any;
};

const AnimatedSearchInput = ({ scrollYValue, onChangeText, placeholder, onFilterPress }: Props) => {
    let event = scrollYValue;

    const clampedScroll = Animated.diffClamp(
        Animated.add(
            event.interpolate({
                inputRange: [0, 5],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            new Animated.Value(0)
        ),
        0,
        50
    );

    const searchBarTranslate = clampedScroll.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -250],
        extrapolate: 'clamp',
    });

    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [0, 20],
        outputRange: [2, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: searchBarTranslate,
                        },
                    ],
                    opacity: searchBarOpacity,
                },
            ]}
        >
            <SearchInput onFilterPress={onFilterPress} placeholder={placeholder} onChangeText={onChangeText} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 30 : 30,
        zIndex: 80,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
});

export default AnimatedSearchInput;
