import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Card, Avatar, Text, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506765515384-028b60a970df' }} 
      style={styles.backgroundImage}
    >
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Home" titleStyle={styles.appbarTitle} />
        <Appbar.Action 
          icon="account" 
          color="#fff" 
          onPress={() => navigation.navigate('Profile')} 
        />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello, Wellcome!</Text>
        <Text style={styles.descriptionText}>
          terimakasih telah mengunjugi aplikasi kami,silhakan klik icon profile untuk melihat profil
        </Text>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: 20, 
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    textAlign: 'justify',
  },
  actionsContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  button: {
    backgroundColor: '#6200ee',
  },
  avatar: {
    backgroundColor: '#6200ee',
  },
});

export default HomeScreen;
