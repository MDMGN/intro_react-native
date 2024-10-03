import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Message, Todos } from './src/components';


export default function App() {

  const [todos, setTodos] = useState([
     /*  {
        id: 1,
        title: "Tarea 1"
      },
      {
        id: 3,
        title: "Tarea 2"
      },
      {
        id: 2,
        title: "Tarea 3"
      } */
  ])



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        { 
            !(todos.length) ? <Todos todos={todos} />  :  <Message/> 
        }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
