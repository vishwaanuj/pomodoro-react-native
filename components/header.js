import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text  style={styles.header_text} >
        {typeof (props.name)!='undefined'?(props.name):"POMODORO TASKS ⏰"}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

header:{
    height:80,
    paddingTop:38,
    backgroundColor:"teal",
    alignItems:'center',
    alignContent:"center",
    justifyContent:"center",
    elevation:10,
    
        },

 header_text:{

    fontSize:20,
    color:"white"

 }



})