import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
    return(
        <View style={styles.container}>
            <Text>Bienvenue sur les paramètres !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});