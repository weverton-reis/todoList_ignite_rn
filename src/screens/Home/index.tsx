import { useState } from "react"
import uuid from 'react-native-uuid';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert } from "react-native"
import { EmptyList } from "../../components/EmptyList"

import { Task } from "../../components/Task"
import Logo from "../../assets/logo.svg"
import PlusIcon from '../../assets/plus.svg'

import { styles } from "./styles"

type TaskItem = {
    id: string,
    text: string,
    completed: boolean
}



export function Home() {
    const [tasks, setTasks] = useState<TaskItem[]>([])

    const [inputIsFocused, setinputIsFocused] = useState(false)

    const [textTask, setTextTask] = useState('')

    

    function handleInputFocus() {
        setinputIsFocused(true)
    }

    function handleInputBlur() {
        setinputIsFocused(false)
    }

    


    function handleAddTask(text: string) {
        const id = uuid.v4()

        setTasks(prevState => [...prevState, { id: id.toString(), text: text, completed: false }])
        setTextTask('')
    
    }


    function handleChangeStatus(id:string){
        const pervStatus = tasks.filter(task => task.id == id)[0].completed
        let newStatus: boolean

        pervStatus ? newStatus = false : newStatus = true
        

        tasks.filter(task => task.id == id)[0].completed = newStatus


        tasks.filter(task => task.id == id)[0].completed 
       
        setTasks([...tasks])
        
        
        

    }


    function handleRemoveTask(id:string){
        Alert.alert("Remover", "Deseja remover essa tarefa?",[
            {
              text: 'Sim',
              onPress: ()=> setTasks(prevState => prevState.filter(task => task.id !== id))
      
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Logo style={styles.logo} />

                <View style={styles.newTask}>
                    <TextInput
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        style={[styles.input, { borderColor: inputIsFocused ? '#5E60CE' : '#0D0D0D', }]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        value={textTask}
                        onChangeText={setTextTask}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => handleAddTask(textTask)}>
                        <PlusIcon />
                    </TouchableOpacity>
                </View>






            </View>





            <View style={styles.tasks}>
                <View style={styles.info}>

                    <View style={styles.infoIten}>
                        <Text style={[styles.textInfo, { color: '#4EA8DE' }]}>Criadas</Text>
                        <Text style={styles.qtdInfo}>{tasks.length}</Text>
                    </View>

                    <View style={styles.infoIten}>
                        <Text style={[styles.textInfo, { color: '#8284FA' }]}>Concluídas</Text>
                        <Text style={styles.qtdInfo}>{tasks.filter(task => task.completed == true).length}</Text>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                       
                        <Task 
                            task={item}  
                            onRemove={id => handleRemoveTask(id)}
                            onChangeStatus={id => handleChangeStatus(id)}
                        />


                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <EmptyList />
                    )}
                />



            </View>


        </View>
    )
}