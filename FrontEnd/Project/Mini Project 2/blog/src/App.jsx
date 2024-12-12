// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import './index.css';

// Component to fetch and display a list of posts
function PostList() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="p-6  bg-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Blog Posts</h1>
      <ul className="space-y-6 max-w-4xl mx-auto">
        {posts.map(post => (
          <li key={post.id} className="p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <Link to={`/posts/${post.id}`} className="text-xl text-white font-semibold hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component to fetch and display details of a single post
function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) {
    return <p className="text-center text-gray-500 text-xl mt-20">Loading...</p>;
  }

  return (
    <div className="p-6  bg-gray-300 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-white mb-6">{post.title}</h1>
        <p className="text-white text-lg leading-relaxed mb-8">{post.body}</p>
        <Link to="/" className="text-white font-semibold text-lg hover:underline">Back to Posts</Link>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App