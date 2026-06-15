import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen() {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');
  const [savedTime, setSavedTime] = useState('');

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@cart_note');
      if (storedData) {
        const { note, time } = JSON.parse(storedData);
        setSavedNote(note);
        setSavedTime(time);
      }
    } catch (e) {
      console.error('Failed to load note', e);
    }
  };

  const saveNote = async () => {
    try {
      const time = new Date().toLocaleTimeString();
      const dataToSave = JSON.stringify({ note, time });
      await AsyncStorage.setItem('@cart_note', dataToSave);
      setSavedNote(note);
      setSavedTime(time);
      setNote(''); // Clear input after saving
    } catch (e) {
      console.error('Failed to save note', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Cart Screen</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>SPECIAL INSTRUCTIONS:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Extra sugar, no ice..."
          value={note}
          onChangeText={setNote}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
          <Text style={styles.saveButtonText}>Save Note</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.savedSection}>
        <Text style={styles.label}>LAST SAVED NOTE:</Text>
        {savedNote ? (
          <>
            <Text style={styles.savedNoteText}>{savedNote}</Text>
            <Text style={styles.savedTimeText}>Saved at {savedTime}</Text>
          </>
        ) : (
          <Text style={styles.savedTimeText}>No note saved yet.</Text>
        )}
      </View>
      
      <TouchableOpacity style={styles.summaryButton}>
        <Text style={styles.summaryButtonText}>View Order Summary</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4C34', // Dark green header from the image
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#1E4620',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  savedSection: {
    backgroundColor: '#F0FFF0', // light green background
    padding: 15,
    borderRadius: 4,
    marginBottom: 20,
  },
  savedNoteText: {
    fontSize: 16,
    color: '#1E4620',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  savedTimeText: {
    fontSize: 12,
    color: '#888',
  },
  summaryButton: {
    backgroundColor: '#1E4620',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
