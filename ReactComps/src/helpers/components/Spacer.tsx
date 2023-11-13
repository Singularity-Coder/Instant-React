import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

function Spacer(): JSX.Element {
    return <View style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },
});

export default Spacer;