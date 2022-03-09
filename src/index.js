import axios from "axios";


export async function getCompanyBySearch (search, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?search=' + search + '&country=' + country)
            return response.data
        } catch (err) {alert(err.message)}
    };

export async function getCompanyByVat (vat, country) {
        try {
            const response =  await axios.get('https://cvrapi.dk/api?vat=' + vat + '&country=' + country)
            return response.data
        } catch (err) {alert(err.message)}
    };

export async function getCompanyByName (name, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?name=' + name + '&country=' + country )
            return response.data
        } catch (err) {alert(err.message)}
    };

export async function getCompanyByProdu (produ, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?produ=' + produ + '&country=' + country )
            return response.data
        } catch (err) {alert(err.message)}
    };

export async function getCompanyByPhone (phone, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?phone=' + phone + '&country=' + country )
            return response.data
        } catch (err) {alert(err.message)}
    }
