import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Student } from "../../components/Student";
import React, { useState } from "react";

export function Home() {
  const [students, setStudents] = useState<string[]>([]);
  const [inputStudentName, setInputStudentName] = useState("");

  function handleAddStudent(newStudent: string) {
    if (students.includes(newStudent)) {
      return Alert.alert("Participante já existe");
    }

    setStudents((prevState) => [...prevState, newStudent]);
    setInputStudentName("");
  }

  function handleExcludeStudent(name: string) {

    Alert.alert("Excluir", `Deseja escluir o ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Deletado!");
          const deletedStudentArray = students.filter(
            (studentName) => studentName !== name
          );

          return setStudents(deletedStudentArray);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
            onChangeText={(name) => setInputStudentName(name)}
            value={inputStudentName}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddStudent(inputStudentName)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.studentTable}
          data={students}
          keyExtractor={(student) => student}
          renderItem={({ item }) => (
            <Student
              name={item}
              key={item}
              onRemove={() => handleExcludeStudent(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmpty}>
              {" "}
              Ninguém ainda ? Adiciona um estudando ao workshop!{" "}
            </Text>
          )}
        />
      </View>
    </>
  );
}
