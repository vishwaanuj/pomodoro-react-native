import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {TextInput, Button, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Header from './components/header';
import Todo_item from './components/todo_item';
import Todo_list from './components/todo_list';
import {colors} from './components/utils/colors';
import { Countdown } from './components/countdown';
import { MotiView, MotiText } from 'moti'


export default function App() {

const [todo,setTodo]=useState([])

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
          <MotiView from={{opacity:0}} animate={{opacity:1}} style={styles.container}>
              <MotiView from={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} style={{width:"100%",alignItems:"center"}}>
                <Text style={{fontSize:30,marginTop:10,padding:10}}>Hey,Vish!</Text>
              </MotiView>
              <Todo_item tasks={todo} addTask={setTodo}/>
              <View style={{flex:1}}>
              <Todo_list taskList={setTodo} tasks={todo}/>
              </View>
           
          </MotiView>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: colors.bg,
    alignContent:"center",
    color:colors.white,
    flex:1
    
  },
  itemList:{

    flex:1,
    marginLeft:23,
    fontSize:22,
    marginTop:4,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:2,
    borderStyle:"dashed",
    padding:10
  },
  inputBox:{
      
      margin:20,
      borderTopColor:"powderblue",
      borderColor:'powderblue',
      color:'#000'
  },

  lis:{
    flex:1,
   elevation:-1,
   backgroundColor:"aliceblue",
    margin:5,
    textAlign:'center',
    flexDirection:"row"
  },

  input:{
    height:50,
    padding:10,
    margin:20,
    borderBottomWidth : 2,
    borderTopWidth : 2,
    borderLeftWidth:2,
    borderRightWidth:2,
    display:'flex',
    borderColor:'teal'
  },

  Button:{
  backgroundColor:'coral'
  }
});
