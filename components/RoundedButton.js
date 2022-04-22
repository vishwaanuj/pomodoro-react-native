import { StyleSheet, Text,Button, View, TouchableOpacity } from 'react-native'
import React from 'react'


const RoundedButton= ({currentTime,changeTime}) => {
  return (

    <View style={styles.layout}>

        <TouchableOpacity style={styles.roundedButton}  onPress={()=>{changeTime(currentTime+10)}}>
        <Text style={{color:"white"}}> + 10 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButton}  onPress={()=>{changeTime(currentTime+15)}}>
        <Text style={{color:"white"}}> + 15 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButton}  onPress={()=>{changeTime(currentTime+20)}}>
            <Text style={{color:"white"}}> + 20 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundedButton}  onPress={()=>{
            if (currentTime>5)
            changeTime(currentTime-5)}}>
            <Text style={{color:"white"}}> - 5 </Text>
        </TouchableOpacity>
           </View>
   
  )
}

export default RoundedButton

const styles = StyleSheet.create({

layout:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    paddingLeft:30,
    padding:5,
    margin:10,
    
    width:"100%"
},
roundedButton:{
color:"white",
backgroundColor:'rgba(94, 132, 226, 0.9)',
padding:5,
justifyContent:"center",
alignItems:"center",
aspectRatio:1/1,
height:50,
borderRadius:25,
elevation:1
}


})