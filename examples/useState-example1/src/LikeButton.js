import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1);

  const handleClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const getButtonText = () => {
    if (liked) {
      return "Unlike";
    } else {
      return "Like";
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handleClick}>{getButtonText()}</button>
      <span>{likeCount}</span>
    </div>
  );
}

export default LikeButton;
