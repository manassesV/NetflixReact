import { StyleSheet }  from 'react-native'


const styles = StyleSheet.create({
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5
    },
    image:{
      height: 50,
      aspectRatio: 16/9,
      resizeMode: 'cover',
      borderRadius: 9
    },
    plot:{
      color: 'darkgrey'
    },
    title:{

    },
    duration:{
       color: 'darkgrey',
       fontSize: 10
    },
    titleContainer:{
        flex:1,
        padding: 5,
        justifyContent: 'center'
    }


})


export default styles;