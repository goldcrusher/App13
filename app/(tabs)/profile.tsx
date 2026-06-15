import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [profileName, setProfileName] = useState('');
  const [savedProfileName, setSavedProfileName] = useState('');

  useEffect(() => {
    loadProfileName();
  }, []);

  const loadProfileName = async () => {
    try {
      const name = await AsyncStorage.getItem('@profile_name');
      if (name !== null) {
        setSavedProfileName(name);
      }
    } catch (e) {
      console.error('Failed to load profile name', e);
    }
  };

  const saveProfileName = async () => {
    try {
      await AsyncStorage.setItem('@profile_name', profileName);
      setSavedProfileName(profileName);
      setProfileName('');
    } catch (e) {
      console.error('Failed to save profile name', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profile Screen</Text>

      <View style={styles.section}>
        <Text style={styles.label}>ENTER PROFILE NAME:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe"
          value={profileName}
          onChangeText={setProfileName}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveProfileName}>
          <Text style={styles.saveButtonText}>Save Name</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.savedSection}>
        <Text style={styles.label}>SAVED PROFILE NAME:</Text>
        {savedProfileName ? (
          <Text style={styles.savedNameText}>{savedProfileName}</Text>
        ) : (
          <Text style={styles.savedTimeText}>No name saved yet.</Text>
        )}
      </View>
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
    color: '#2E4C34',
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
    backgroundColor: '#F0FFF0',
    padding: 15,
    borderRadius: 4,
    marginBottom: 20,
  },
  savedNameText: {
    fontSize: 16,
    color: '#1E4620',
    fontWeight: 'bold',
  },
  savedTimeText: {
    fontSize: 12,
    color: '#888',
  },
});
