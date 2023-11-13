import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    TouchableOpacity, Text, Image
} from 'react-native';
import { showToast } from '../helpers/components/CustomToast';
import LinearGradient from "react-native-linear-gradient";
import Spacer from '../helpers/components/Spacer';
import { CustomStatusBar } from '../helpers/components/CustomStatusBar';
import { SvgXml } from 'react-native-svg';
import FaceSvg from '../assets/images/ic_face.svg';

// https://blog.logrocket.com/create-style-custom-buttons-react-native/

// Set fixed opacity to all buttons
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const RoundedButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

// npm i react-native-linear-gradient
const GradientButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#004d40", "#009688"]}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const GradientButton2 = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#1387d4", "#259399", "#0b466e"]}
            start={{ x: 0, y: 0 }} // Gradient starting coordinates
            end={{ x: 0, y: 0.5 }} // Gradient ending coordinates
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

// react-native-svg
// npm isntall react-native-svg-transformer
// https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md#use-with-svg-files
// https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration
const VectorIconButton = ({ onPress, icon, title, backgroundColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.appButton]}
    >
        <View style={[styles.iconButtonContainer, { backgroundColor: backgroundColor }]}>
            {/* <Image source={require("../assets/images/ic_face.svg")} style={{ width: 24, height: 24 }} /> */}
            <FaceSvg width="30" height="30" fill={"white"} />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18, marginStart: 12}}>{title}</Text>
        </View >
    </TouchableOpacity>
);

const StatefulButton = ({ title }) => {
    const [isDisabled, setDisabled] = useState(false);

    const handlePress = () => {
        setDisabled(true);
        setTimeout(() => setDisabled(false), 3000); // Disable the button for 3 sec and enable again
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                styles.appButtonContainer,
                isDisabled && styles.appButtonDisabled // If isDisabled prop changes the style after && is triggered 
            ]}
            disabled={isDisabled}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

function CustomButtons(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <CustomStatusBar />
            <Button title='Hello' />
            <Spacer />
            <RoundedButton onPress={() => showToast("Hello")} title={"Rounded Button"} />
            <Spacer />
            <GradientButton onPress={() => showToast("Hello")} title={"Gradient Button"} />
            <Spacer />
            <GradientButton2 onPress={() => showToast("Hello")} title={"Gradient Button 2"} />
            <Spacer />
            <VectorIconButton onPress={() => showToast("Hello")} icon="github" title="Login with GitHub" backgroundColor="crimson" />
            <Spacer />
            <StatefulButton title={"Stateful Button"} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    screenContainer: {
    },
    screenContainer2: {
    },
    appButton: {
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    iconButtonContainer: {
        elevation: 0,
        borderRadius: 32,
        padding: 16,
        flexDirection: 'row',
        alignContent: "space-between",
        alignItems: 'center'
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "lowercase"
    },
    appButtonDisabled: {
        backgroundColor: "#000"
    }
});

export default CustomButtons;