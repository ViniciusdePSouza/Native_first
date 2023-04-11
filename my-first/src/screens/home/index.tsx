import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Student } from "../../components/Student";

interface Students {
  name: string;
  id: string;
}

export function Home() {
  const students = [
    {name: "John", id: "1"},
    {name: "John", id: "12"},
    {name: "Vini", id: "13"},
    {name: "John", id: "14"}
  ];

  function handleAddStudent() {
    if(students.includes({ name: 'Vini', id: '13' })) {
      return Alert.alert('Existe', 'Ja existe uma pessoa dessa aí ' )
    }
  }

  function handleExcludeStudent(name: string) {
    Alert.alert('Ecluir', `Deseja escluir o ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {Alert.alert('Deletado!')} 
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>

        <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do aluno"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList<Students> style={styles.studentTable}
          data={students}
          keyExtractor={(student) => student.id}
          renderItem={({name, id}) => (
            <Student
              name={name}
              key={id}
              onRemove={() => handleExcludeStudent(name)}
              id={id}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmpty}> Ninguém ainda ? Adiciona um estudando ao workshop! </Text>
          )
          }
        /> 
      </View>
    </>
  );
}
