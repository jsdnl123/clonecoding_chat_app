import axios from "axios";

const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export default fetchPosts;
