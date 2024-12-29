import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Card, Avatar, Text, Button } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Appbar on top */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title="Profile" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <Avatar.Image 
          size={100} 
          style={styles.avatar}
          source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKmUf3DZk4aYyl9hhAlYoDUhvgTNVIlVT85qC2fycYnDiUaMq6_=s360-c-no' }} 
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>M. TAUFIK KURRAHMAN</Text>
          <Text style={styles.userSubtitle}>MAHASISWA UIR</Text>
        </View>
      </View>

      {/* Profile Information Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.infoText}>Email: m.taufikkurrahman@student.uir.ac.id</Text>
          <Text style={styles.infoText}>no-hp: 085376041304</Text>
          <Text style={styles.infoText}>Lokasi: Pekanbaru, Riau</Text>
        </Card.Content>
      </Card>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appbar: {
    backgroundColor: '#6200ee',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    marginRight: 16,
    borderWidth: 3,
    borderColor: '#6200ee',
    elevation: 5, 
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  userSubtitle: {
    fontSize: 16,
    color: '#757575',
  },
  card: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 8,
    backgroundColor: '#fff',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#6200ee',
    marginTop: 16,
    marginHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
