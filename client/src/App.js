import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <h1>All Blogs</h1>
      {blogs &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>User: {blog.id}</h2>
            <h3>Title: {blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
