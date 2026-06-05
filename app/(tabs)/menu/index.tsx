import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano', price: '₱120', desc: 'Bold and strong black coffee brewed with espresso shots.' },
  { id: '2', category: 'Hot Drinks', name: 'Cappuccino', price: '₱150', desc: 'Classic Italian coffee with equal parts espresso, steamed milk, and foam.' },
  { id: '3', category: 'Hot Drinks', name: 'Latte', price: '₱160', desc: 'Smooth espresso blended with creamy steamed milk.' },
  { id: '4', category: 'Cold Drinks', name: 'Iced Coffee', price: '₱130', desc: 'Chilled brewed coffee served over ice for a refreshing kick.' },
  { id: '5', category: 'Cold Drinks', name: 'Frappuccino', price: '₱175', desc: 'Blended iced coffee drink topped with whipped cream.' },
  { id: '6', category: 'Desserts', name: 'Cheesecake', price: '₱180', description: 'Classic New York style cheesecake.' },
  { id: '7', category: 'Desserts', name: 'Brownie', price: '₱100', description: 'Fudgy chocolate brownie.' },
  { id: '8', category: 'Meals', name: 'Salad', price: '₱200', description: 'Fresh garden salad.' },
  { id: '9', category: 'Meals', name: 'Pasta', price: '₱250', description: 'Creamy carbonara pasta.' },
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
