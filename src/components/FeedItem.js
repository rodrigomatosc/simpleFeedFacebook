import React from "react";
import { FeedHeader } from "./FeedHeader";
import { FeedComments } from "./FeedComments";

function FeedItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <FeedHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <FeedComments comments={comments} />
    </div>
  );
}

export default FeedItem;
