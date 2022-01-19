import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://beardmenclient.herokuapp.com/api"
})