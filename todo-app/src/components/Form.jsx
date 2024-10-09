import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'

export function Form({ handle }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnClose} onPress={handle}>
        <Text style={styles.btnCloseText}>X</Text>
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
          placeholder={'Introduzca un título'}
          placeholderTextColor={'#999'}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.85,
  },
  btnClose: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginVertical: 20,
  },
  btnCloseText: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
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
    elevation: 3,
    shadowColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
})
