import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Notes from "./Notes"

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome to your personal information manager</Text>
        <Button
          onPress={() => navigate('Todo')}
          title="Todo"
        />
        <Button
          onPress={() => navigate('Notes')}
          title="Make notes"
        />
        <Button
          onPress={() => navigate('Appointments')}
          title="Set up appointments"
        />
      </View>
    );
  }
}

class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Create todo list',
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
  constructor(props) {
  super(props);
  this.state = {
    text: '',
    items: []
  };
}
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
    title: 'Create appointments',
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
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
});
