import { ToastAndroid } from 'react-native';

// https://reactnative.dev/docs/toastandroid

export const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};

export const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
        'All Your Base Are Belong To Us',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
    );
};

export const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
        'A wild toast appeared!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
    );
};