import axios from "axios";

export const api = new axios.create({
    baseURL:'https://2d04-179-211-70-8.ngrok.io/api/internos/',
})


