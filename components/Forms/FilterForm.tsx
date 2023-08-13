import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface Props {
    liked?: boolean;
    highestRated?: boolean;
    lowestRated?: boolean;
    newest?: boolean;
    oldest?: boolean;
    setFilterOptions?: any;
}

const FilterForm = ({ liked, highestRated, lowestRated, newest, oldest, setFilterOptions }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Toggle Options:</Text>
            <View style={styles.optionContainer}>
                <Text>Liked</Text>
                <Switch value={liked} onValueChange={() => setFilterOptions({ liked: !liked })} />
            </View>
            <View style={styles.optionContainer}>
                <Text>Highest Rated</Text>
                <Switch value={highestRated} onValueChange={() => setFilterOptions({ highestRated: !highestRated })} />
            </View>
            <View style={styles.optionContainer}>
                <Text>Lowest Rated</Text>
                <Switch value={lowestRated} onValueChange={() => setFilterOptions({ lowestRated: !lowestRated })} />
            </View>
            <View style={styles.optionContainer}>
                <Text>Newest</Text>
                <Switch value={newest} onValueChange={() => setFilterOptions({ newest: !newest })} />
            </View>
            <View style={styles.optionContainer}>
                <Text>Oldest</Text>
                <Switch value={oldest} onValueChange={() => setFilterOptions({ oldest: !oldest })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
});

export default FilterForm;
