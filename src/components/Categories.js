import React from "react";
import { useSelector } from "react-redux";


const Categories = ({ currentCategory, categoryChangeHandler }) => {

const { posts } = useSelector((state) => state.blog);

const categories = [];
posts.map(post => categories.push(post.category))
const categoriesFinal = ["All Categories", ...new Set(categories)];


  return (
    <ul className="list-group">
      {categoriesFinal.map((category) => (
        <li
          key={category}
          className={
            category === currentCategory
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => categoryChangeHandler(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
export default Categories;