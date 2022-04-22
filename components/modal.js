import { StyleSheet, Text, TouchableOpacity, View ,Button} from 'react-native'
import React, { useState,useEffect } from 'react'
import { MotiView, MotiText } from 'moti'
import { Countdown } from './countdown'
import RoundedButtons from './RoundedButton'
const Modal = ({visible,taskName,showModal}) => {

 const [show,setShow]=useState(visible)


 const[toggle,setToggle]=useState(true)
 const [pause,setPause]=useState(true)

 const [timer,setTimer]=useState(20)

  
 

 
  return (


   <MotiView 
   from={{ scale: 0,translateY: -100, }} 
   animate={{ scale: 1 ,translateY: 0,}} 
   exit={{scale: 0,}}  style={styles.modal}>
       <MotiText  from={{translateY: -100,}} 
       animate={{translateY: 0,}} 
       style={{margin:10,fontSize:18,
        borderBottomWidth:1.5,
        borderBottomColor:'teal'}}>
        <Text style={{fontSize:14}}>Focusing on : </Text>
       {taskName}
       </MotiText>

       <MotiView  from={{ scale: .5,translateY: -100, }} animate={{ scale: 1 ,translateY: 0,}}>
           <Countdown minutes={timer} isPaused={pause} onProgress={()=>{}} onEnd={()=>{}} /></MotiView>


           <MotiView  from={{ scale: .5,translateY: -100, }} animate={{ scale: 1 ,translateY: 0,}}>
            <RoundedButtons currentTime={timer} changeTime={setTimer} />
        </MotiView>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,width:"90%"}}>

           {toggle? <Button title="Start" onPress={()=>{setPause(false);setToggle(!toggle)}}/>:<Button title="pause" onPress={()=>{setPause(true);setToggle(!toggle)}}/>}
           <Button title="Reset" onPress={()=>{setToggle(true);setPause(true);setTimer(20)}}></Button>
        </View>

       
       <View>
           <TouchableOpacity onPress={()=>{showModal(!show)}} style={styles.modalButton}>
           <Text>Close</Text>
           </TouchableOpacity>
        </View>
       
       </MotiView> 
   
  )
}

export default Modal

const styles = StyleSheet.create({
modal:{
    backgroundColor:"white",
    elevation:3,
    borderRadius:5,
    borderWidth:1,
    borderColor:"teal",
    position:"absolute",
    top: 0,
    left:5,
   margin:10,
    height:"250%",
    width:'90%',
    alignItems:"center",
   
},
modalButton:{

    borderColor:'teal',
    position:"relative",
   bottom:-30,
    borderWidth:3,
    padding:3,
    elevation:1,
    borderRadius:1
},

close:{

position:'absolute',
bottom:150

}

})