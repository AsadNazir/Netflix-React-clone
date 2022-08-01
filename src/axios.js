import axios from "axios";
import {base} from './request.js'
const instance = axios.create(
    {
        baseURL:base
    }
)

export default instance;