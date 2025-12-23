import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// LE POINT CRUCIAL EST ICI : "export default"
export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Page d'Accueil 🏠</Text>
            <Button title='To ProfileScreen' onPress={() =>navigation.navigate('ProfileScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});