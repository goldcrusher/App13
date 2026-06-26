import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen() {
  const [profileName, setProfileName] = useState('');
  const [savedProfileName, setSavedProfileName] = useState('');
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    loadProfileName();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

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

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('@favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      } else {
        setFavorites([]);
      }
    } catch (e) {
      console.error('Failed to load favorites', e);
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

      <View style={styles.favoritesSection}>
        <Text style={styles.label}>FAVORITE DRINKS:</Text>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.favoriteItem}>
                <Text style={styles.favoriteName}>{item.name}</Text>
                <Text style={styles.favoritePrice}>{item.price}</Text>
              </View>
            )}
            style={{ maxHeight: 200 }}
          />
        ) : (
          <Text style={styles.savedTimeText}>No favorite drinks yet.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EB',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#323232',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#323232',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    color: '#323232',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#C67B54',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  savedSection: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  savedNameText: {
    fontSize: 18,
    color: '#323232',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  savedTimeText: {
    fontSize: 12,
    color: '#323232',
    textAlign: 'center',
  },
  favoritesSection: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
    width: '100%',
  },
  favoriteName: {
    fontSize: 16,
    color: '#323232',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  favoritePrice: {
    fontSize: 14,
    color: '#C67B54',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
