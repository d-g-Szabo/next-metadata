import Link from "next/link";
//app/posts/[id]/page.jsx

export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
  );
  const post = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Post id: {post.id}</h1>
      <h2>Post title: {post.title}</h2>
      <p>Post content: {post.body}</p>
    </div>
  );
}
