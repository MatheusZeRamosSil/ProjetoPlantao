import axios from "axios";

export const api = new axios.create({
    baseURL:'https://e296-179-211-69-131.ngrok.io/api/internos/',
})


