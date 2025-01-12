import { useEffect } from "react";
import { fetchComments } from "../utils/fetchComments";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function setFetching() {
      const result = await fetchComments();
      if (!ignore) {
        setComments(result);
      }
    }
    setFetching();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ol type="1">
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ol>
  );
}
