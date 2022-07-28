import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-my-shop-27e53.cloudfunctions.net/api" // API (cloud function) URL
});
// Link antiguo: http://localhost:5001/my-shop-27e53/us-central1/api

export default instance;