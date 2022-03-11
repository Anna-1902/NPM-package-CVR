import axios from "axios";

export const baseUrl = 'https://cvrapi.dk/api?search=2345&country=dk'

export async function getMockSearch () {
    try {
        const response = await axios.get(`${baseUrl}`)
        return response.data
    } catch (error) {return error}
};