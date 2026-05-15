import { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('Ivan Rigz R. Suguran');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/Txy9hd5j/profileimage.avif' }}
        style={styles.profileImage}
      />

      <Text style={styles.nameText}>
        Hello, {name}!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type your name"
        value={name}
        onChangeText={setName}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 14,
    color: '#777777',
  },
  input: {
    height: 40,
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    width: 200,
    backgroundColor: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
});

// F12 Script 
const myName = "Ivy";
const greet = (myName) => {
  return `Hi Hi, ${myName}!`;
};
const classmates = ["Shania", "Ali", "Janine", "Alex", "Erika"];
classmates.map(name => greet(name));

console.log(classmates.map(name => greet(name)));