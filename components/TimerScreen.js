import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import Input from './input.js';




const TimerScreen = (props) =>{

  // const [ hours, setHour ] = useState(props.hour);
  // const [ minutes, setMinutes ] = useState(props.minute);
  // const [ seconds, setSeconds ] = useState(props.second);
  // // console.log(hour,minutes,seconds,"ueudu");


    return (
      <View style={styles.container}>
      <View style={styles.display}>
          <View style={styles.numberBlock}><Text>{props.hour}</Text></View>
          <View style={styles.numberBlock}><Text>{props.minute}</Text></View>
          <View style={styles.numberBlock}><Text>{props.second}</Text></View>
     </View>

     <View style={styles.timer}>

      </View>

      </View>
    );

  }





  const styles=StyleSheet.create({
       container:{
         flex: 1
       },
       display:{
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
         borderWidth: 1,
         color: "#ff6347",
         justifyContent: 'center',
         alignItems: 'center',
         margin: 3
       },
       timer:{
         flexDirection: 'row',
         justifyContent: 'center',
         // alignContent: 'space-between',
         marginTop: 50
       }




  })



  export default TimerScreen;
