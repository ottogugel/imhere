import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react';
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import moment from 'moment';

export function NewEvent() {

  const day = moment().format('dddd');   // Para obter o dia em texto
  const dayNumber = new Date().getDate(); //Para obter o dia em número
  const year = new Date().getFullYear(); //Para obter o ano
  const month = moment().format('MMMM') // Para obter o mês

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participant exists",
        "There is already a participant on the list with that name"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Delete", `Remove the participant ${name}?`, [
      {
        text: "Yes",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>New Event</Text>
      <Text style={styles.eventDate}>
        {day}, {month} {dayNumber}, {year}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No one has arrived at the event yet? Add participants to your list.
          </Text>
        )}
      />
    </View>
  );
}

