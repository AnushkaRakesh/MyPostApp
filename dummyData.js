// dummyData.js
const dummyData = {
    posts: [
      { id: 1, title: "Post 1", body: "This is the body of post 1" },
      { id: 2, title: "Post 2", body: "This is the body of post 2" },
      // Add more posts as needed
    ],
    comments: [
      { id: 1, postId: 1, text: "Comment 1 for post 1", author: "John Doe" },
      { id: 2, postId: 1, text: "Comment 2 for post 1", author: "Jane Smith" },
      { id: 3, postId: 2, text: "Comment 1 for post 2", author: "John Doe" },
      // Add more comments as needed
    ],
  };
  
  export default dummyData;
  