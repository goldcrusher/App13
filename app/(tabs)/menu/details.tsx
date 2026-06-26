import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const { item } = route.params || {};

  useEffect(() => {
    if (item) {
      checkFavorite();
    }
  }, [item]);

  const checkFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('@favorites');
      if (storedFavorites) {
        const favoritesList = JSON.parse(storedFavorites);
        const exists = favoritesList.some((fav: any) => fav.id === item.id);
        setIsFavorite(exists);
      }
    } catch (e) {
      console.error('Failed to load favorites', e);
    }
  };

  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('@favorites');
      let favoritesList = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (isFavorite) {
        favoritesList = favoritesList.filter((fav: any) => fav.id !== item.id);
      } else {
        favoritesList.push(item);
      }

      await AsyncStorage.setItem('@favorites', JSON.stringify(favoritesList));
      setIsFavorite(!isFavorite);
    } catch (e) {
      console.error('Failed to toggle favorite', e);
    }
  };

  if (!item) return <View style={styles.container}><Text>No details available.</Text></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <Text style={styles.description}>{item.description}</Text>


      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EB',
    padding: 20,
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: '#323232',
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#323232',
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#C67B54',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#323232',
    marginTop: 20,
    lineHeight: 22,
    textAlign: 'center',
  },
  favoriteButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C67B54',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  favoriteButtonText: {
    color: '#C67B54',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#C67B54',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
