import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, View, Button
} from 'react-native';
import { ButtonStrings, ScreenNames } from '../helpers/constants/Constants';

function Home({ navigation }): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"#ffffff"}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text style={{ fontSize: 42, color: "#000000" }}>
                    Hello <Text style={{ fontWeight: '700' }}>React</Text>
                </Text>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate(ScreenNames.welcomeReact)}
                        title={ButtonStrings.reactWelcomeScreen}
                        color="#000000"
                        accessibilityLabel={ButtonStrings.reactWelcomeScreen}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate(ScreenNames.customButtons)}
                        title={ButtonStrings.buttons}
                        color="#000000"
                        accessibilityLabel={ButtonStrings.buttons}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#ffffff",
        flex: 1
    },
    button: {
        marginTop: 16
    }
});

export default Home;
