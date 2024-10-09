import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export function Form({ handle }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnClose} onPress={handle}>
        <Text style={styles.btnCloseText}>X Cerrar</Text>
      </Pressable>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Título: </Text>
        <TextInput
          keyboardType="text"
          style={styles.input}
          placeholder={'Introduzca un título'}
          placeholderTextColor={'#999'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Fecha: </Text>
        <TextInput
          keyboardType="text"
          style={styles.input}
          placeholder={'Introducir una fecha'}
          placeholderTextColor={'#999'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Descripción: </Text>
        <TextInput
          keyboardType="text"
          style={styles.input}
          placeholder={'Introducir una descripción'}
          placeholderTextColor={'#999'}
        />
      </View>
      <Pressable style={styles.btnAdd} onPress={() => {}}>
        <Text style={styles.btnCloseText}>Agregar</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
  formGroup: {
    paddingHorizontal: 20,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    borderWidth: 0.5,
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
  btnClose: {
    marginRight: 20,
    marginVertical: 20,
    alignSelf: 'center',
  },
  btnCloseText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
  },
  btnAdd: {
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#0FD',
    width: 300,
    height: 50,
    justifyContent: 'center',
    textTransform: 'uppercase',
    borderRadius: 20,
  },
})
