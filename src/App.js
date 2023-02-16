import React, { useState } from "react";
import Posts from "./components/Posts";
import Categories from "./components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { filterPosts } from "./components/blog-state";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
const App = () => {
  const { posts } = useSelector((state) => state.blog);
  const [filter, setFilter] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  // Category filter
  const dispatch = useDispatch();
  
  const categoryChangeHandler = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
    if (category === "All Categories") {
      setFilter(false);
    } else {
      setSearchQuery("");
      dispatch(filterPosts(category));
      setFilter(true);
    }
  };
  //End of category filter
  //Search
  const searchChangeHandler = (query) => {
    setCurrentCategory("");
    setFilter(false);
    setSearchQuery(query);
  };
  // End of search
  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };
  // End of pagination
  return (
    <div className="container">
      <div className="row row-one justify-content-center">
        <SearchBar value={searchQuery} onChange={searchChangeHandler} />
      </div>
      <div className="row justify-content-center mb-3">
        <div className="title col-md-6">
          <Posts
            filter={filter}
            searchQuery={searchQuery}
            pageNumber={currentPage}
            pageSize={postsPerPage}
          />
        </div>
        <div className="category col-md-2">
          <Categories
            currentCategory={currentCategory}
            categoryChangeHandler={categoryChangeHandler}
          />
        </div>
      </div>
      <div className="row">
        <div className="col offset-md-2">
          {!searchQuery && !filter && (
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              noOfPosts={posts}
              onPreviousClick={previousClickHandler}
              onNextClick={nextClickHandler}
              onPageChange={pageChangeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;

