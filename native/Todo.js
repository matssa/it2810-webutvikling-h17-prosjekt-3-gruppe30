import React, { Component } from 'react'
import { Text, TextInput, AsyncStorage, Button, View, TouchableOpacity, StyleSheet } from 'react-native'

class Todo extends Component {
   state = {
      notes : "",
      names: [
         {
            id: 0,
            name: 'Ben',
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }

   addItem = (item) => {
     this.state.names.push(1, this.state.notes);
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
               onPress={() => this.addItem(this.state.notes)}
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
