import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const DictionaryScreen = () => {
  const [notes, setNotes] = useState([]); // Array to hold notes
  const [text, setText] = useState(''); // Input text state

  // Add a note to the list
  const addNote = () => {
    if (text.trim() !== '') {
      setNotes([...notes, { id: Date.now().toString(), content: text }]);
      setText(''); // Clear the input field
    }
  };

  // Remove a note from the list
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a note..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>{item.content}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',  // Light background color
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff', // White background for the input field
    shadowColor: '#000',  // Add shadow for a subtle elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addButton: {
    backgroundColor: '#007BFF',  // Blue button color
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',  // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
    flex: 1,  // Ensures text occupies remaining space
  },
  deleteButton: {
    color: '#E74C3C',  // Red color for delete button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DictionaryScreen;
