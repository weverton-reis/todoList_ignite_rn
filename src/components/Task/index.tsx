import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

import UncheckedIcon from "../../assets/unchecked.svg"
import Trash from "../../assets/trash.svg"
export function Task() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <UncheckedIcon />
            </TouchableOpacity>

            <Text style={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
            <TouchableOpacity style={styles.button}>
                <Trash />
            </TouchableOpacity>
        </View>
    )
}