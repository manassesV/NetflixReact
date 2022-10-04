import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
       flex: 1,
       padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
      }, 
      image:{
        width: 100,
        height: 170,
        resizeMode:"cover",
        borderRadius:20,
        margin:5
      }
});

export default styles;