// UserProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  // Sample user data for demonstration purposes
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add more user details as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
      {/* Add more user details UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 18,
    color: '#666',
  },
  // Add more styles for additional user details if needed
});

export default UserProfileScreen;
