import { View, Text } from "react-native"

import { styles } from "./styles"

import ClipboardIcon from "../../assets/clipboard.svg"

export function EmptyList() {
 
    return (
        <View style={styles.container}>
            <ClipboardIcon/>
           <Text style={[styles.text,{fontWeight:'bold',marginTop: 20}]}>Você ainda não tem tarefas cadastradas</Text>
           <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}