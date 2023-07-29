// PostDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchCommentsByPostId } from '../api'; // Import the fetchCommentsByPostId function from api.js

const PostDetailsScreen = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the selected post on component mount
    fetchCommentsByPostId(post.id).then((data) => setComments(data));
  }, [post]);

  // ... Rest of the PostDetailsScreen component as before
    // Sample comments data for demonstration purposes
    const comments = [
      { id: 1, text: 'Comment 1', author: 'John Doe' },
      { id: 2, text: 'Comment 2', author: 'Jane Smith' },
      // Add more comments as needed
    ];
  
    // Render individual comment item
    const renderCommentItem = ({ item }) => (
      <View style={styles.commentItem}>
        <Text style={styles.commentText}>{item.text}</Text>
        <Text style={styles.commentAuthor}>- {item.author}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postBody}>{post.body}</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCommentItem}
        />
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 16,
    marginBottom: 16,
  },
  commentItem: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  commentText: {
    fontSize: 14,
  },
  commentAuthor: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 4,
  },
});

export default PostDetailsScreen;
