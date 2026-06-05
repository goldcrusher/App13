import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', category: 'HOT DRINKS', name: 'Americano', price: 'P120', description: 'Bold and strong black coffee brewed with espresso shots.' },
  { id: '2', category: 'HOT DRINKS', name: 'Cappuccino', price: 'P150', description: 'Espresso-based coffee prepared with steamed milk foam.' },
  { id: '3', category: 'HOT DRINKS', name: 'Latte', price: 'P160', description: 'Coffee drink made with espresso and steamed milk.' },
  { id: '4', category: 'COLD DRINKS', name: 'Iced Coffee', price: 'P130', description: 'Refreshing iced coffee.' },
  { id: '5', category: 'COLD DRINKS', name: 'Frappuccino', price: 'P170', description: 'Blended iced coffee drink.' },
  { id: '6', category: 'DESSERTS', name: 'Cheesecake', price: 'P180', description: 'Classic New York style cheesecake.' },
  { id: '7', category: 'DESSERTS', name: 'Brownie', price: 'P100', description: 'Fudgy chocolate brownie.' },
  { id: '8', category: 'MEALS', name: 'Salad', price: 'P200', description: 'Fresh garden salad.' },
  { id: '9', category: 'MEALS', name: 'Pasta', price: 'P250', description: 'Creamy carbonara pasta.' },
];

export default function MenuScreen() {
  const navigation = useNavigation<any>();

  const handlePress = (item: any) => {
    navigation.navigate('details', { item });
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop Menu</Text>

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
    backgroundColor: '#FFFBF0',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontStyle: 'italic',
    color: '#4A2511',
    marginLeft: 20,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  category: {
    fontSize: 10,
    color: '#A89F91',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    color: '#4A2511',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#D2691E',
    fontWeight: 'bold',
  },
});
