import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },

    header: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
    },

    logo:{
        marginTop: 60,
        marginBottom: 24
    },

    newTask: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: -27
       
    },

    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#F2F2F2',
        marginRight: 4,

        
    },

    button:{
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
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