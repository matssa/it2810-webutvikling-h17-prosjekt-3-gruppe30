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
      this.setState({"notes": value})
   }
  render() {
    return (
    <View>
      <TextInput value={this.state.notes}
      style={{height: 100}}
      multiline= {true}
      numberOfLines= {4}
      blurOnSubmit={false}
      onChangeText = {this.setNotes}/>
    </View>
  )
  }
}
export default Notes;
