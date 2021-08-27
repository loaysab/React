import React from "react";
import queryString from "query-string"

const Posts = ({location}) => {
  const x=queryString.parse(location.search);
  console.log(x);

  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
      <h2></h2>
    </div>
  );
};

export default Posts;
