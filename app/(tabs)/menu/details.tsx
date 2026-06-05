import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const { item } = route.params || {};

  if (!item) return <View style={styles.container}><Text>No details available.</Text></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <Text style={styles.description}>{item.description}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf0d2ff',
    padding: 20,
  },
  category: {
    fontSize: 12,
    color: '#A89F91',
    fontWeight: 'bold',
    marginTop: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontStyle: 'italic',
    color: '#4A2511',
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    color: '#D2691E',
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: '#4A2511',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 40,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
