// ListPostsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchPosts } from '../api'; // Import the fetchPosts function from api.js

const ListPostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of posts on component mount
    fetchPosts().then((data) => setPosts(data));
  }, []);

  // Render individual post item
  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => navigation.navigate('PostDetails', { post: item })}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
  },
});

export default ListPostsScreen;
