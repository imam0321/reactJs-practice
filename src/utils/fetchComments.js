export const fetchComments = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );

  return result.json();
};
