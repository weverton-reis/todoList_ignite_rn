import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:64,
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#333333',
        marginBottom: 16,
        backgroundColor: '#262626',
        padding: 8


    },

    text:{
        flex:1,
        fontSize: 14,
        color: '#F2F2F2',
        marginHorizontal: 8,
    },

    button:{
        width:32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'

    }
})