// create a card component that will be used to display the quotes
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LikeButton from '../Buttons/LikeButton';
import CrossButton from '../Buttons/CrossButton';
import { Entypo } from '@expo/vector-icons';

type Props = {
    quote?: string;
    onPress?: () => void;
    liked?: boolean;
    onCrossPress?: () => void;
    movie?: string;
    rating?: any;
    timestamp?: any;
};

const QuoteCard = ({ quote, onPress, liked, onCrossPress, movie, rating, timestamp }: Props) => {
    const renderStars = () => {
        const starElements = [];
        const maxRating = 5;

        for (let i = 1; i <= maxRating; i++) {
            const starColor = rating && i <= rating ? '#FFD700' : '#888';
            starElements.push(<Entypo key={i} name="star" size={20} color={starColor} style={{ marginRight: 5 }} />);
        }

        return starElements;
    };

    const formatTimeFromTimestamp = (timestamp: string): string => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();      
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        return `${hours}:${formattedMinutes}`;
      }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <CrossButton style={styles.likeButton} onPress={onCrossPress} />
                <LikeButton style={styles.likeButton} liked={liked} onPress={onPress} />
            </View>
            <View style={styles.quoteWrapper}>
                <Text style={styles.quote}>{quote}</Text>
            </View>
            <View style={styles.movieWrapper}>
                <Text style={styles.movie}>- {movie}</Text>
            </View>
            <View style={styles.footer} >
                <View style={styles.ratingContainer}>{renderStars()}</View>
                <Text style={styles.timestamp}>{formatTimeFromTimestamp(timestamp)}</Text>
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
        fontSize: 20,
        fontWeight: '600'
    },
    movie: {
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
    movieWrapper: {
        paddingHorizontal: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
        paddingTop: 13,
    }
});

export default QuoteCard;
