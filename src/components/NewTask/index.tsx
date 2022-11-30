import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"



import { styles } from "./styles"

import PlusIcon from '../../assets/plus.svg'

export function NewTask() {
    const [inputIsFocused, setinputIsFocused] = useState(false)

    function handleInputFocus() {
        setinputIsFocused(true)
    }

    function handleInputBlur() {
        setinputIsFocused(false)
    }

    return (
        <View style={styles.container}>
            <TextInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={[styles.input, { borderColor: inputIsFocused ? '#5E60CE' : '#0D0D0D', }]}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='#808080'
            />

            <TouchableOpacity style={styles.button}>
                <PlusIcon/>
            </TouchableOpacity>
        </View>
    )
}