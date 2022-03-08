import axios from "axios";

export default{
    async getCompanyBySearch (search, country) {
        let searchResult = ''

        try {
            await axios.get('https://cvrapi.dk/api?search=' + search + '&country=' + country )
                .then((response) => {
                    return searchResult = response
                })
        } catch (err) {alert(err.message)}
    },

    async getCompanyByVat (vat, country) {
        let vatSearchResult = ''

        try {
            await axios.get('https://cvrapi.dk/api?vat=' + vat + '&country=' + country )
                .then((response) => {
                    return vatSearchResult = response
                })
        } catch (err) {alert(err.message)}
    },

    async getCompanyByName (name, country) {
        let nameSearchResult = ''

        try {
            await axios.get('https://cvrapi.dk/api?name=' + name + '&country=' + country )
                .then((response) => {
                    return nameSearchResult = response
                })
        } catch (err) {alert(err.message)}
    },

    async getCompanyByProdu (produ, country) {
        let produSearchResult = ''

        try {
            await axios.get('https://cvrapi.dk/api?produ=' + produ + '&country=' + country )
                .then((response) => {
                    return produSearchResult = response
                })
        } catch (err) {alert(err.message)}
    },

    async getCompanyByPhone (vat, country) {
        let phoneSearchResult = ''

        try {
            await axios.get('https://cvrapi.dk/api?phone=' + phone + '&country=' + country )
                .then((response) => {
                    return phoneSearchResult = response
                })
        } catch (err) {alert(err.message)}
    }
}
