import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'





const Todo_item = ({tasks,addTask}) => {
  const [task, setTask] = React.useState()
  return (
    <View style={{marginTop:10}}>
      <TextInput
      onChangeText={(val)=>setTask(val)}
      style={styles.todo}
       placeholder='what would you like to focus on?'
       />
       <View style={{alignItems:"center"}}>
         <Button onPress={()=>addTask([...tasks,task])}  
         style={styles.button} 
         title="📑  add task"/>
       </View>
    </View>
      )
}

export default Todo_item

const styles = StyleSheet.create({

   
   todo:{
      borderStyle:"dotted",
      borderColor:"teal",
      color:"black",
      borderRadius:10,
      padding:5,
      marginBottom:10,
      borderWidth:2,
      margin:10
   },
   button:{
     width:1,
     borderRadius:100
   }



        })