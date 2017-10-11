import React, { Component } from "react";
import { AsyncStorage, Text, View, TextInput, StyleSheet } from "react-native";

class Notes extends Component {
  state = {
    "notes": ""
  }
  componentDidMount = () => AsyncStorage.getItem("notes").then((value) =>
  this.setState({ "notes": value}))

  setNotes = (value) => {
      AsyncStorage.setItem('notes', value);
   }
  render() {
    return (
    <View>
      <TextInput style={{height: 100}}
      multiline= {true}
      numberOfLines= {4}
      blurOnSubmit={false}
      onChangeText = {this.setNotes}/>
      <Text>
        {this.state.notes}
      </Text>
    </View>
  )
  }
}
export default Notes;
