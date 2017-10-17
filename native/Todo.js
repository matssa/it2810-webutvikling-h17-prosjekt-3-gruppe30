import React, { Component } from 'react'
import { Text, TextInput, AsyncStorage, Button, View, TouchableOpacity, StyleSheet } from 'react-native'

class Todo extends Component {

   state = {
      notes : "",
      names: [{id: 0, name: "yo"},{id: 1, name: "yyo"},{id: 2, name: "yyyo"},{id: 3, name: "yyyyo"},{id: 4, name: "yyyyyo"}],
   }
   alertItemName = (item) => {
      this.state.names.splice(item.id, 1);
      this.setState({"notes": ""});
      this.renderRow();
   }

   addItem = (item) => {
     AsyncStorage.setItem("todo", item);
     this.renderRow();
   }

   addTest = (item) => {
     if (this.state.items.length === 0) {
       i = 0
     } else {
       let i = this.state.names.length - 1;
     }
     let object = {id: i, name: item};
     this.state.names.push(object);
     this.setState({"notes": ""});
     this.renderRow();
   }

   setNotes = (value) => {
       AsyncStorage.setItem('notes', value);
       this.setState({"notes": value})
    }

    lapsList() {

    return this.state.names.map((data) => {
      return (
        <View><Text>{data}</Text></View>
      )
    })

}

    renderRow() {
      let list = []
      list.push(AsyncStorage.getItem("todo"));
      let items = this.state.names.map((item, index) => (
        <TouchableOpacity
          key = {item.id}
          style = {styles.container}
          onPress = {() => this.alertItemName(item)}>

          <Text style = {styles.text}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))
      return items;
    }

   render() {
      return (
         <View>
           <View>
             <TextInput value={this.state.notes}
               style={{height: 100}}
               multiline= {true}
               numberOfLines= {4}
               blurOnSubmit={false}
               onSubmitEditing={ () => this.addItem() }
               onChangeText = {this.setNotes}/>
             <Button
               onPress={() => this.addTest(this.state.notes)}
               title="Submit"
             />
           </View>
           {this.renderRow()}
         </View>
      )
   }
}
export default Todo

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
