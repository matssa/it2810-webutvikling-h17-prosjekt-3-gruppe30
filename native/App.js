import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight,
StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Notes from "./Notes"


//displays the homescreen with the images as links
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal information manager'
  };
  render() {
    const { navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {true}/>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "blue"}}>
          Make todo-list</Text>
        <TouchableHighlight onPress={() => navigate('Todo')}>
          <Image style={{height: 150, width: 150}} source=
          {require('./img/todo.png')} />
        </TouchableHighlight>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "blue"}}>
          Make appointments</Text>
        <TouchableHighlight onPress={() => navigate('Appointments')}>
          <Image style={{height: 150, width: 150}} source=
          {require('./img/appoint.png')} />
        </TouchableHighlight>
        <Text style={{fontSize: 15, fontWeight: "bold", color: "blue"}}>
          Take notes  </Text>
        <TouchableHighlight onPress={() => navigate('Notes')}>
          <Image style={{height: 150, width: 150}} source=
          {require('./img/notes.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo-list',
  };
  render() {
    return (
      <View>
        <Text>Todo</Text>
      </View>
    );
  }
}

class NoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes',
  };
  render() {
    return (
      <View>
        <Text>Here you can write notes about whatever you want.</Text>
        <Text>The content is saved automatically.</Text>
        <Notes />
      </View>
      );
    }
}
class AppointmentScreen extends React.Component {

  static navigationOptions = {
    title: 'Appointments',
  };
  render() {
    return (
      <View>
        <Text>Appointments</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Todo: { screen: TodoScreen },
  Notes: { screen: NoteScreen},
  Appointments: { screen: AppointmentScreen}
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
