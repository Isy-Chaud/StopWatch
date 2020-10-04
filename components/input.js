import React, {useState} from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const input = props => {
  // const [ value, setValue ] =useState('WORKOUT NAME');
  return (
    //{...props} is the spread operator in this case it's allowing the parrent components to have props that will also apply to the child component

    <TextInput
       {...props}
       style={{...styles.input, ...props.style }}
       value={props.value}
       onChangeText={props.onChangeText}
       />

  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    borderColor : '#ff6347',
    borderWidth: 2,
    borderRadius: 14,
    color: '#ff6347',
    justifyContent: 'center',
    fontSize: 18,
    marginTop: 30,
    textAlign: 'center'

  }
});

export default input;
