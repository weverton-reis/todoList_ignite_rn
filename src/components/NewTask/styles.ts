import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
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
})