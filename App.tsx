import React, { useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import TextArea from './components/TabBar/TextArea';
import QuoteCard from './components/Layout/QuoteCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Quote {
    text: string;
    liked: boolean;
}

const App: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [newQuote, setNewQuote] = useState<string>('');

    React.useEffect(() => {
        loadQuotes();
    }, []);

    const loadQuotes = async () => {
        try {
            const savedQuotes = await AsyncStorage.getItem('quotes');
            if (savedQuotes) {
                setQuotes(JSON.parse(savedQuotes));
            }
        } catch (error) {
            console.error('Error loading quotes:', error);
        }
    };

    const saveQuotes = async (quotesToSave: any) => {
        try {
            await AsyncStorage.setItem('quotes', JSON.stringify(quotesToSave));
        } catch (error) {
            console.error('Error saving quotes:', error);
        }
    };

    const handleAddQuote = () => {
        if (newQuote.trim() !== '') {
            const updatedQuotes = [...quotes, { text: newQuote, liked: false }];
            setQuotes(updatedQuotes);
            saveQuotes(updatedQuotes);
            setNewQuote('');
            Keyboard.dismiss();
        }
    };

    const sortedQuotes = [...quotes].sort((a, b) => {
        if (a.liked && !b.liked) return -1;
        if (!a.liked && b.liked) return 1;
        return 0;
    });

    const handleLikeQuote = (index: number) => {
        const updatedQuotes = [...quotes];
        updatedQuotes[index].liked = !updatedQuotes[index].liked;

        updatedQuotes.sort((a, b) => {
            if (a.liked && !b.liked) return -1;
            if (!a.liked && b.liked) return 1;
            return 0;
        });

        setQuotes(updatedQuotes);
        saveQuotes(updatedQuotes);
    };

    const handleDeleteQuote = (index: Number) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        setQuotes(updatedQuotes);
        saveQuotes(updatedQuotes);
    };

    const renderItem = ({ item, index }: { item: Quote; index: number }) => (
        <QuoteCard quote={item.text} onPress={() => handleLikeQuote(index)} liked={item.liked} onCrossPress={() => handleDeleteQuote(index)} />
    );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? -30 : 0} style={styles.keyboardView}>
            <FlatList data={sortedQuotes} renderItem={renderItem} keyExtractor={(_item, index) => index.toString()} contentContainerStyle={styles.contentStyle} />
            <TextArea placeholder="Enter a new quote" value={newQuote} onChangeText={setNewQuote} onSubmitEditing={handleAddQuote} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
    },
    contentStyle: {
        paddingTop: 50,
        paddingBottom: 100,
    },
});

export default App;
