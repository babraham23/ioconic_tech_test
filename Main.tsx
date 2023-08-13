import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuoteCard from './components/Layout/QuoteCard';
import AnimatedSearchInput from './components/Inputs/AnimatedSearchInput';
import FAB from './components/Buttons/FAB';
import CreateQuoteForm from './components/Forms/CreateQuoteForm';
import { set } from 'mongoose';

interface Quote {
    text: string;
    liked: boolean;
    movie: string;
    rating: any;
    timestamp: any;
}

const Main: React.FC = () => {
    const [scrollYValue] = useState(new Animated.Value(0));
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [newQuote, setNewQuote] = useState<string>('');
    const bottomSheetRef = React.useRef<BottomSheetModal>(null);
    const snapPoints = React.useMemo(() => ['80%'], []);
    const [sheetContent, setSheetContent] = useState<string>('create');

    const renderBackdrop = React.useCallback(
        (props: any) => <BottomSheetBackdrop {...props} pressBehavior={'close'} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.75} />,
        []
    );

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

    const handleSave = (quote: string, movie: string, rating: number) => {
        const currentTime = new Date();
        const updatedQuotes = [
            ...quotes,
            {
                text: quote,
                liked: false,
                movie,
                rating,
                timestamp: currentTime.toISOString(),
            },
        ];
        setQuotes(updatedQuotes);
        saveQuotes(updatedQuotes);
        setNewQuote('');
        bottomSheetRef.current?.dismiss();
    };

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
        <QuoteCard
            quote={item.text}
            rating={item.rating}
            movie={item.movie}
            onPress={() => handleLikeQuote(index)}
            liked={item.liked}
            onCrossPress={() => handleDeleteQuote(index)}
            timestamp={item.timestamp}
        />
    );

    const onChangeText = (text: string) => {
        if (text === '') {
            loadQuotes();
        } else {
            const searchText = text.toLowerCase();
            const filteredQuotes = sortedQuotes.filter((quote) => {
                const lowerCaseQuoteText = quote.text.toLowerCase();
                const lowerCaseQuoteMovie = quote.movie.toLowerCase();
                return lowerCaseQuoteText.includes(searchText) || lowerCaseQuoteMovie.includes(searchText);
            });
            setQuotes(filteredQuotes);
        }
    };

    const sortedQuotes = [...quotes].sort((a, b) => {
        if (a.liked && !b.liked) return -1;
        if (!a.liked && b.liked) return 1;
        return 0;
    });

    const filterBy = (filter: string) => {
        // liked, highest rated, lowest rated, newest, oldest
    };

    const handleBottomSheet = (type: string) => {
        if (type === 'create') {
            setSheetContent('create');
            bottomSheetRef.current?.present();
        } else if (type === 'filter') {
            setSheetContent('filter');
            bottomSheetRef.current?.present();
        }
    };

    return (
        <View style={styles.container}>
            <AnimatedSearchInput onFilterPress={() => handleBottomSheet('filter')} placeholder="Search..." scrollYValue={scrollYValue} onChangeText={onChangeText} />
            <FlatList
                data={sortedQuotes}
                renderItem={renderItem}
                keyExtractor={(_item, index) => index.toString()}
                contentContainerStyle={styles.contentStyle}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], { useNativeDriver: false })}
                decelerationRate="normal"
                scrollEventThrottle={16}
            />
            <FAB pencil style={styles.fab} onPress={() => handleBottomSheet('create')} />
            <BottomSheetModal ref={bottomSheetRef} snapPoints={snapPoints} backdropComponent={renderBackdrop} onDismiss={() => bottomSheetRef.current?.dismiss()}>
                {sheetContent === 'create' ? <CreateQuoteForm onSave={handleSave} /> : <View style={{ width: '100%', height: 500, backgroundColor: 'cyan' }} />}
            </BottomSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentStyle: {
        paddingTop: 100,
        paddingBottom: 100,
    },
    fab: {
        position: 'absolute',
        bottom: 50,
        right: 30,
    },
});

export default Main;
