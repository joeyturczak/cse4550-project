import * as React from "react";
import { FAB } from "react-native-paper";
import styles from "../stylesheet";


export function DropButton() {
    return (
        <FAB
        style={styles.fab}
        icon="google-maps"
        onPress={() => console.log('Pressed')}
        />
    );
}