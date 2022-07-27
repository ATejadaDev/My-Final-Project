import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/my-shop-27e53/us-central1/api" // API (cloud function) URL
});

export default instance;