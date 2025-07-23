import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Method to fetch posts
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error("Error loading posts:", error);
      this.setState({ hasError: true });
    }
  };

  // Lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling hook
  componentDidCatch(error, info) {
    console.error("Error caught in component:", error, info);
    alert("An error occurred while rendering posts!");
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
