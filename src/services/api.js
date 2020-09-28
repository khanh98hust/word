import axios from 'axios';

export default axios.create({
  baseURL : "https://word-30b46.firebaseio.com",
  headers :{
    "content-type" : "application/json"
  }
});