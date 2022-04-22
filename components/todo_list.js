import { View, Text,StyleSheet, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import Modal from './modal'

const Todo_list = ({taskList,tasks}) => {
   const[visible,setVisible]=useState(false)
   const [modalText,setModalText]=useState("")

   const renItem= ({item,key}) => {

    return(<View  key={key}>
        <TouchableOpacity  onPress={()=>{setVisible(!visible);setModalText(item)}}  style={styles.taskList}>
            <Text>{item}</Text>
          
        </TouchableOpacity>
    </View>)
   }
  return (

    <View >
            <View  style={styles.heading}>
              
            <Text style={{fontSize:22}}>Todo List ✏️</Text>
           <TouchableOpacity onPress={()=>taskList([])} style={{backgroundColor:"teal",padding:10,borderRadius:10}}>
               <Text style={{color:"white",fontSize:14}}>Clear Tasks</Text></TouchableOpacity>
            </View>
            <FlatList  data={tasks} renderItem={renItem}/>
            {visible && (<Modal visible={visible} showModal={setVisible} taskName={modalText} />)}
           
    </View>

  )
}


const styles=StyleSheet.create({

heading:{

    borderBottomWidth:2,
    borderBottomColor:"black",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    marginTop:40,
    marginLeft:0,
    padding:10,
 
  
},
taskList:{
 padding:10,
 margin:5,
 borderWidth:1,
 borderStyle:"dashed",
 elevation:1
}

})
export default Todo_list