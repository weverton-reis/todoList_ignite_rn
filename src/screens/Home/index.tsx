import { useState } from "react"
import { View, Text, FlatList } from "react-native"
import { Header } from "../../components/Header"

import { styles } from "./styles"

type TaskItem={
    id:string,
    text:string,
    completes:boolean
}



export function Home() {
    const [tasks, setTasks] = useState<TaskItem[]>([])
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
                        <Text>{item.text}</Text>


                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text >
                            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
                        </Text>
                    )}
                />



            </View>
        </View>
    )
}