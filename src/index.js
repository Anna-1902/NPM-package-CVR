module.exports = function getCompanyByVat (search, country) {
    const axios = require("axios");

    return new Promise((resolve, reject) => {
        axios.get('https://cvrapi.dk/api?search=' + search + '&country=' + country )
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {reject(error)})
    })
}