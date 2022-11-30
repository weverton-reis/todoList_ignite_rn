import { View, Text } from "react-native"

import Logo from "../../assets/logo.svg"
import { NewTask } from "../NewTask"

import { styles } from "./styles"

export function Header() {
    return (
        <View style={styles.container}>
           <Logo style={styles.logo}/>
           <NewTask/>
        </View>
    )
}