import { useState } from "react"
import { View, Text, FlatList, Button } from "react-native"
import { EmptyList } from "../../components/EmptyList"
import { Header } from "../../components/Header"
import { Task } from "../../components/Task"

import { styles } from "./styles"

type TaskItem={
    id:string,
    text:string,
    completed:boolean
}



export function Home() {
    const [tasks, setTasks] = useState<TaskItem[]>([
        { id: "1", text: "Terminar o trabalho e enviar na plataforma", completed: false },
        { id: "2", text: "Terminar o trabalho e enviar na plataforma", completed: false }
    ])
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.tasks}>
                <View style={styles.info}>

                    <View style={styles.infoIten}>
                        <Text style={[styles.textInfo, { color: '#4EA8DE' }]}>Criadas</Text>
                        <Text style={styles.qtdInfo}>0</Text>
                    </View>

                    <View style={styles.infoIten}>
                        <Text style={[styles.textInfo, { color: '#8284FA' }]}>Concluídas</Text>
                        <Text style={styles.qtdInfo}>2</Text>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                       <Task/>


                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                       <EmptyList/>
                    )}
                />



            </View>

            
        </View>
    )
}