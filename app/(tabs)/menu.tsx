import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Array of objects representing the menu items
const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano' },
  { id: '2', category: 'Hot Drinks', name: 'Latte' },
  { id: '3', category: 'Hot Drinks', name: 'Cappuccino' },
  { id: '4', category: 'Cold Drinks', name: 'Iced Coffee' },
  { id: '6', category: 'Desserts', name: 'Cheesecake' },
  { id: '7', category: 'Desserts', name: 'Brownie' },
  { id: '8', category: 'Meals', name: 'Salad' },
  { id: '9', category: 'Meals', name: 'Pasta' },
];

export default function MenuScreen() {
  // Basic interaction: Console log output
  const handlePress = (item: any) => {
    console.log(`tap a button to see output: ${item.name}`);
  };

  // renderItem function for FlatList
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
        <Text style={styles.buttonText}>View Item</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Changed App Title */}
      <Text style={styles.title}>My Café Menu</Text>

      {/* Applying FlatList */}
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark theme matching the screenshot
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
    paddingBottom: 20,
    marginBottom: 20,
  },
  category: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#8E8E93',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
