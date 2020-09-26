import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, Picker, SafeAreaView,} from 'react-native';
import Input from './input.js';




let hourArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let sixtyArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];


let TimeFormat =(number)=>{
  if(number<10){
    number = "0" + number
  }
  return number.toString()
}



const StartingScreen = (props) =>{

  const [ selectedHour, setSelectedHour ] = useState(0);
  const [ selectedMin, setSelectedMin ] = useState(0);
  const [ selectedSecond, setSelectedSecond ] = useState(0);



  return (
    <View style={styles.screen}>


    <Input />

    <View style={styles.text}>
    <Text style={styles.color}>SET TIME</Text>

    </View>

      <View style={styles.pickerContainer}>


          <Picker style={styles.picker}
           selectedValue={selectedHour}
           onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
          >


          {
            hourArray.map((item, i)=>

            <Picker.Item key={i} label={TimeFormat(item)} value={i} />

           )
          }


          </Picker>

          <Picker style={styles.picker}
          selectedValue={selectedMin}
          onValueChange={(itemValue, itemIndex) => setSelectedMin(itemValue)}
          >
          {
            sixtyArray.map((item, i)=>
            <Picker.Item style={styles.color} key={i} label={TimeFormat(item)} value={i} />
           )
          }
          </Picker>

          <Picker style={styles.picker}
          selectedValue={selectedSecond}
          onValueChange={(itemValue, itemIndex) => setSelectedSecond(itemValue)}
          >
          {
            sixtyArray.map((item, i)=>
            <Picker.Item key={i} label={TimeFormat(item)} value={i} />
           )
          }

          </Picker>
      </View>
      <View style={styles.button}>
      <Button title="start" onPress={()=>props.startTimer(selectedHour, selectedMin, selectedSecond)} />
      </View>
    </View>

  );
}
const styles=StyleSheet.create({
   screen:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     width: '100%',
     color:'#ff6347'

   },
   pickerContainer:{
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     marginTop: 1,
     // height: '30%',
     // width:
     color: '#ff6347'
   },
   picker:{
     width: 70,
     height: 70,
     // borderWidth: 1,
     margin: 5,
     color:'#ff6347'
   },
   text:{
     flex: 0.2,
     justifyContent: 'center',
     alignItems: 'center',
     // margin: 5
     color:'#ff6347',
     // borderWidth: 1,
     marginTop: 10,
     marginBottom: -20,
     fontSize: 18,
     textAlign: 'center'
   },
   button:{
     flex: 0.5,
     justifyContent: 'center',
     alignItems: 'center',
     width: 100,
     height: 100,
     borderColor: '#ff6347',
     borderWidth: 2,
     borderRadius: 50,
     margin: 10,
     backgroundColor: '#ff6347',
     // color: 'black'

   },
   color:{
     color: '#ff6347'
   }
})

export default StartingScreen;
