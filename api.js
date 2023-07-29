// api.js
import dummyData from './dummyData'; // This is the dummy JSON data file

const fetchPosts = async () => {
  // Simulate an API call to fetch posts
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData.posts); // Replace this with the actual API call
    }, 1000); // Simulating a delay of 1 second
  });
};

const fetchCommentsByPostId = async (postId) => {
  // Simulate an API call to fetch comments for a specific post
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = dummyData.comments.filter((comment) => comment.postId === postId);
      resolve(comments); // Replace this with the actual API call
    }, 1000); // Simulating a delay of 1 second
  });
};

export { fetchPosts, fetchCommentsByPostId };
