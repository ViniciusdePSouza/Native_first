import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
    function handleAddStudent() {
        console.log('click')
    }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <TextInput style={styles.input} placeholder='Nome do aluno' placeholderTextColor='#6B6B6B'/>

      <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
    </View>
    </>
  );
}