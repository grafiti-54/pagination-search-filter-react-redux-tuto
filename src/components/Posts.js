import React from "react";
import { useSelector } from "react-redux";
import { paginate } from "../utils/paginate";
const Posts = ({ filter, searchQuery, pageNumber, pageSize }) => {
  const { posts } = useSelector((state) => state.blog);
  const { filteredPosts } = useSelector((state) => state.blog);
  let searchResult;
  if (searchQuery) {
    searchResult = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  const paginatedPosts = paginate(posts, pageNumber, pageSize);
  return (
    <>
      <p>
        showing{" "}
        {filter
          ? filteredPosts.length
          : searchQuery
          ? searchResult.length
          : paginatedPosts.length}{" "}
        posts of total {posts.length} posts
      </p>{" "}
      <div>
        {!filter &&
          !searchQuery &&
          paginatedPosts.map((post) => (
            <article key={post.id}>
              <h2> {post.title}</h2>
            </article>
          ))}
        {filter &&
          filteredPosts.map((post) => (
            <article key={post.id}>
              <h2> {post.title}</h2>
            </article>
          ))}
        {searchQuery &&
          searchResult.map((post) => (
            <article key={post.id}>
              <h2> {post.title}</h2>
            </article>
          ))}
      </div>
    </>
  );
};
export default Posts;