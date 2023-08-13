import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import TextAreaInput from '../Inputs/TextAreaInput';
import FAB from '../Buttons/FAB';

interface QuoteFormProps {
    onSave: (quote: string, movie: string, rating: number) => void;
}

const CreateQuoteForm = ({ onSave }: QuoteFormProps) => {
    const [quote, setQuote] = useState('');
    const [movie, setMovie] = useState('');
    const [rating, setRating] = useState<number | null>(null);

    const handleStarPress = (selectedRating: number) => {
        setRating(selectedRating === rating ? null : selectedRating);
    };

    const saveQuote = () => {
        if (quote && movie && rating !== null) {
          onSave(quote, movie, rating); // Call the onSave function from the parent
          setQuote('');
          setMovie('');
          setRating(null);
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please Enter your Quote</Text>
            <TextAreaInput height={150} numberOfLines={4} placeholder="Enter your quote" value={quote} onChangeText={setQuote} />
            <Text style={styles.title}>The Movies Name</Text>
            <TextAreaInput height={60} numberOfLines={2} placeholder="Enter movie name" value={movie} onChangeText={setMovie} />
            <Text style={styles.title}>What would you rate the film?</Text>
            <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((starNumber) => (
                    <TouchableOpacity key={starNumber} onPress={() => handleStarPress(starNumber)} style={styles.starButton}>
                        <Entypo name={rating && starNumber <= rating ? 'star' : 'star-outlined'} size={30} color={rating && starNumber <= rating ? '#FFD700' : '#888'} />
                    </TouchableOpacity>
                ))}
            </View>
            <FAB style={styles.fab} onPress={saveQuote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        margin: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        alignSelf: 'center',
    },
    starButton: {
        paddingHorizontal: 4,
    },
    fab: {
        position: 'absolute',
        bottom: -110,
        right: 20,
    }
});

export default CreateQuoteForm;
