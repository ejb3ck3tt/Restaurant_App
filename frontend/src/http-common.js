//helper file
import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000/api/v1/restaurants";

export default axios.create({
  //base URL for backend server
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
