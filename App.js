import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartingScreen from './components/startingScreen';
import Header from './components/Header.js';
import TimerScreen from './components/TimerScreen';

//import JS
import {TimeFormat} from './assets/js';



export default function App() {
  const [ selectedHour, setSelectedHour ] = useState(0);
  const [ selectedMin, setSelectedMin ] = useState(0);
  const [ selectedSecond, setSelectedSecond ] = useState(0);
  const [ workout, setWorkout ] = useState('WORKOUT NAME');
  const [ reset, setReset ] = useState(false);
  // console.log(reset, 'update');

  const timerHandler = (selectedHour, selectedMin, selectedSecond, value ) =>{


      let Timer = (config) => {
       let {h,m,s} = config;
       let seconds = 0;
       let minutes = 0;
       let hours = 0;

       let i = setInterval(()=>{
        seconds+=1
        getHours()
        getMinutes()
        getSeconds()

        setSelectedHour(TimeFormat(hours));
        setSelectedMin(TimeFormat(minutes));
        setSelectedSecond(TimeFormat(seconds));
        setWorkout(value);

        // console.log( seconds);


      //checks client config
      if(h&&m&&s){
        if(h==hours&&m==minutes&&s==seconds){
          clearTimeout(i)
        }
      }else if(h&&m || h&&s){
        if(h==hours&&m==minutes || h==hours&&s==seconds){
          clearTimeout(i)
        }
      }else if(h){
        if(h==hours){
          clearTimeout(i)
        }
      }else if(m&&s){
        if(m==minutes&&s==seconds){
          clearTimeout(i)
        }
      }else if(m){
        if(m==minutes){
          clearTimeout(i)
        }
      }else{
        if(s==seconds){
          clearTimeout(i)
        }
      }


      },1000)

       function getSeconds(){
          if(seconds>=60){
           seconds = 0;
           minutes+=1
          }
        }

       function getMinutes(){
          if(minutes>=60){
           minutes = 0;
           hours+=1;
          }
        }

       function getHours(){
          if(hours>=24){
           hours = 0;
          }
        }

        // return Timer(config);

      }

      Timer({h:selectedHour, m:selectedMin, s:selectedSecond})

  }






let content = <StartingScreen startTimer={timerHandler}/>;

const newTimerHandler = ()=>{
  // setSelectedHour(false);
  // setSelectedMin(false);
  setSelectedSecond(0);
  // setWorkout('WORKOUT NAME');
  // console.log(selectedSecond);
  setReset(false);

}
const restartTimer = () =>{
    setReset(true)
    timerHandler( selectedHour, selectedMin, selectedSecond, workout );

}



if(selectedHour  || selectedMin  || selectedSecond == true || workout  ){
  content = <TimerScreen
                    hour={selectedHour}
                    minute={selectedMin}
                    second={selectedSecond}
                    workout={workout}
                    reset={restartTimer}
                    newTimer={newTimerHandler}
                    />;
}

if(reset === true){
  // console.log('step a time');
  content = <TimerScreen
                    hour={selectedHour}
                    minute={selectedMin}
                    second={selectedSecond}
                    workout={workout}
                    reset={restartTimer}
                    newTimer={newTimerHandler}
                    />;
}

if(selectedSecond === 0 ) {
  content = <StartingScreen startTimer={timerHandler} />
}




  return (
    <View style={styles.container}>
      <Header />
      {content}
    </View>
  );



}
//APP






const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#ff6347"

  },
});
