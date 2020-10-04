import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Input from './input.js';
import {TimeFormat} from '../assets/js';




const TimerScreen = (props) =>{

  const [ hour , setHour ] = useState(props.hour);
  const [ minute , setMinute ] = useState(props.minute);
  const [ second , setSecond ] = useState(props.second);
  const [ theme , setTheme ] = useState(props.workout);



const timerHandler = ( ) =>{




}



    return (
      <View style={styles.container}>
      <View style={styles.workoutName}>
       <Text style={styles.text}>{props.workout}</Text>
      </View>
      <View style={styles.displayTimer}>
          <View style={styles.numberBlock}><Text style={styles.text}>{props.hour}</Text></View>
          <View style={styles.numberBlock}><Text style={styles.text}>{props.minute}</Text></View>
          <View style={styles.numberBlock}><Text style={styles.text}>{props.second}</Text></View>
     </View>

     <View style={styles.timer}>
         <View style={styles.button}>
         {
           // <Button title="restart" onPress={timerHandler}/>

}
        <Button title="restart" onPress={props.reset}/>

         </View>
         <View style={styles.button}>
{
     // <Button title="start" onPress={()=> console.log('here 2')}/>

}
            <Button title="start" onPress={props.newTimer}/>

         </View>
      </View>

      </View>
    );

  }





  const styles=StyleSheet.create({
       container:{
         flex: 1
       },
       displayTimer:{
         // flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         // alignContent: 'space-between',
         marginTop: 50
       },
       numberBlock:{
         width: 80,
         height: 80,
         borderRadius: 40,
         borderColor: "#ff6347",
         // borderWidth: 1,
         color: "#ff6347",
         justifyContent: 'center',
         alignItems: 'center',
         margin: 3,
       },
       timer:{
         flexDirection: 'row',
         justifyContent: 'center',
         alignContent: 'space-between',
         marginTop: 20
       },
       text: {
         fontSize: 25
       },
       workoutName:{
         alignItems: 'center',
         marginTop: 15
       },
       button:{
         // flex: 0.5,
         justifyContent: 'center',
         alignItems: 'center',
         width: 100,
         height: 50,
         borderColor: '#ff6347',
         borderWidth: 2,
         borderRadius: 15,
         margin: 10,
         backgroundColor: '#ff6347',
         // color: 'black'

       }




  })



  export default TimerScreen;
