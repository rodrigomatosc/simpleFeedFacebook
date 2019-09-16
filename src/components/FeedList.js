import React from "react";
import FeedItem from "./FeedItem";
import data from "../../data";

class FeedList extends React.Component {
  state = { posts: data.posts };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <FeedItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default FeedList;
