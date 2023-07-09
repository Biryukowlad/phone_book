import axios from "axios";

const $userHost = axios.create({
    baseURL: 'http://localhost:8081/'
})
export {
    $userHost
}