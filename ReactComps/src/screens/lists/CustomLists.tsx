import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View, Button
} from 'react-native';
import { ButtonStrings, ScreenNames } from '../../helpers/constants/Constants';
import { CustomStatusBar } from '../../helpers/components/CustomStatusBar';

function CustomLists({ navigation }): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate(ScreenNames.flatList)}
                        title={ButtonStrings.flatList}
                        color="#000000"
                        accessibilityLabel={ButtonStrings.flatList}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate(ScreenNames.sectionList)}
                        title={ButtonStrings.sectionList}
                        color="#000000"
                        accessibilityLabel={ButtonStrings.sectionList}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate(ScreenNames.selectableFlatList)}
                        title={ButtonStrings.selectableFlatList}
                        color="#000000"
                        accessibilityLabel={ButtonStrings.selectableFlatList}
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

export default CustomLists;
