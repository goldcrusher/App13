import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  // State variables
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Message based on counter
  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/Txy9hd5j/profileimage.avif' }}
        style={styles.image}
      />


      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />


      <Text style={styles.text}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>

      <Text style={styles.text}>{message}</Text>


      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="RESET" onPress={() => setCount(0)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
  }
});

// F12 Script 
const myName = "Ivy";
const greet = (myName: string) => {
  return `Hi Hi, ${myName}!`;
};
const classmates = ["Shania", "Ali", "Janine", "Alex", "Erika"];
classmates.map(name => greet(name));

console.log(classmates.map(name => greet(name)));