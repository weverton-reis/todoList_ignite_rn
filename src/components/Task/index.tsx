import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

import UncheckedIcon from "../../assets/unchecked.svg"
import CheckedIcon from "../../assets/checked.svg"
import Trash from "../../assets/trash.svg"

type Props = {
    task: {
        id: string,
        text: string,
        completed: boolean

    },

    onRemove: (id:string) => void,
    onChangeStatus: (id:string) => void,
}



export function Task({task, onRemove, onChangeStatus}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>onChangeStatus(task.id)}>
                {task.completed ? <CheckedIcon/> :   <UncheckedIcon />}
            </TouchableOpacity>

            <Text style={
                [
                    styles.text, 
                    {
                        textDecorationLine: task.completed ? 'line-through' : 'none', 
                        color: task.completed ? '#808080' : '#F2F2F2'
                    
                    }  
                ]
            }>{task.text}</Text>


            <TouchableOpacity style={styles.button} onPress={()=>onRemove(task.id)}>
                <Trash />
            </TouchableOpacity>
        </View>
    )
}