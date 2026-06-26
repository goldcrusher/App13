import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {
  const navigation = useNavigation<any>();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/iced');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const formattedData = data.slice(0, 10).map((item: any, index: number) => ({
          id: item.id.toString(),
          category: index % 2 === 0 ? 'HOT DRINKS' : 'COLD DRINKS',
          name: item.title,
          price: `P${100 + index * 10}`,
          description: item.description,
        }));

        setMenuItems(formattedData);
      } catch (err) {
        setError('No internet connection or failed to load menu.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

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
      <Text style={styles.title}>The Grande Café Menu</Text>


      {loading ? (
        <ActivityIndicator size="large" color="#C67B54" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EB',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#323232',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    elevation: 2,
    alignItems: 'center',
  },
  category: {
    fontSize: 10,
    color: '#323232',
    marginBottom: 4,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#323232',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#C67B54',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
