import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Image Placeholder */}
      {/* To use a local image, change the source to: require('@/assets/images/your-image.png') */}
      <Image
        source={{ uri: 'https://picsum.photos/seed/placeholder/200/200' }} 
        style={styles.profileImage}
      />
      
      {/* Name Placeholder */}
      <Text style={styles.nameText}>
        [Your Name Here]
      </Text>
      
      {/* Subtitle Placeholder */}
      <Text style={styles.subtitleText}>
        [Your Details] - [More Details]
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2', // Light grey background
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 14,
    color: '#777777',
  },
});
