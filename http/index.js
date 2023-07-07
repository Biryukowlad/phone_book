import axios from "axios";

const $userHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
export {
    $userHost
}