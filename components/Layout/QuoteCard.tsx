// create a card component that will be used to display the quotes
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LikeButton from '../Buttons/LikeButton';
import CrossButton from '../Buttons/CrossButton';

type Props = {
    quote?: string;
    onPress?: () => void;
    liked?: boolean;
    onCrossPress?: () => void;
};

const QuoteCard = ({ quote, onPress, liked, onCrossPress }: Props) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <CrossButton style={styles.likeButton} onPress={onCrossPress} />
                <LikeButton style={styles.likeButton} liked={liked} onPress={onPress} />
            </View>
            <View style={styles.quoteWrapper}>
                <Text style={styles.quote}>{quote}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        minHeight: 100,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },
    quote: {
        fontSize: 16,
    },
    likeButton: {
        zIndex: 99,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quoteWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
});

export default QuoteCard;
