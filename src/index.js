import axios from "axios";

export default{
    async getCompanyBySearch (search, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?search=' + search + '&country=' + country)
            return response
        } catch (err) {alert(err.message)}
    },

    async getCompanyByVat (vat, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?vat=' + vat + '&country=' + country )
            return response
        } catch (err) {alert(err.message)}
    },

    async getCompanyByName (name, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?name=' + name + '&country=' + country )
            return response
        } catch (err) {alert(err.message)}
    },

    async getCompanyByProdu (produ, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?produ=' + produ + '&country=' + country )
            return response
        } catch (err) {alert(err.message)}
    },

    async getCompanyByPhone (vat, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?phone=' + phone + '&country=' + country )
            return response
        } catch (err) {alert(err.message)}
    }
}
