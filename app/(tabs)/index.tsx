import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/seed/placeholder/200/200' }}
        style={styles.profileImage}
      />

      <Text style={styles.nameText}>
        Ivan Rigz R. Suguran
      </Text>

      <Text style={styles.subtitleText}>
        MMA Students - A301 - CS126
      </Text>

      <Text style={styles.subtitleText}>
        I like minimalistic style design.
      </Text>
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
});
