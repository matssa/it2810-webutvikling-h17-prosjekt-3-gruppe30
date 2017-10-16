import React, { Component } from "react";
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button } from "react-native";

class Notes extends Component {
  state = {
    "notes": ""
  }
  clearNotes = (value) => {
    AsyncStorage.setItem("notes", "");
    this.setState({"notes": value})
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
      <Button
        onPress={this.clearNotes}
        title="Clear Notes"
      />
    </View>
    )
  }
}
export default Notes;
