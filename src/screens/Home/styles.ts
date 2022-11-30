import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },

    tasks:{
        marginVertical: 48,
        marginHorizontal: 24,
    },

    info:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
       
    },

    infoIten:{
        flexDirection: 'row',
        alignItems:'center'
       
    },

    textInfo:{
        fontSize: 14,
        fontWeight: 'bold',
        marginRight:8
    },

    qtdInfo:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D9D9D9',
        backgroundColor: '#333333',
        width: 25,
        textAlign: 'center',
        borderRadius: 100
    }
})