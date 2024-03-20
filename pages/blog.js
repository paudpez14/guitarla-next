import React from "react";
import Layout from "@/components/layout";
import Post from "@/components/post";
function Blog({ posts }) {
  return (
    <Layout title={"Blog"} description={"Blog de musica, consejos , etc"}>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div>
          {posts.map((post) => {
            return <Post key={post.id} post={post.attributes}></Post>;
          })}
        </div>
      </main>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  try {
    const response = await fetch(
      `http://192.168.1.3:1337/api/posts?populate=*`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const { data: posts } = await response.json();
    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { posts: {} }, // O manejar de otra manera
    };
  }
}
