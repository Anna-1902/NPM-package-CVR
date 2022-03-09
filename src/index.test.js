import {getCompanyByName, getCompanyByPhone, getCompanyByProdu, getCompanyBySearch, getCompanyByVat} from './index.js'

describe('index.js', () => {

    //search by name, cvr or p-number
    test('getCompanyBySearch finds company in cvr register by name, cvr or p-number', async () => {
        const data = {"name": "STEN & CO. ApS"}
        const result = await getCompanyBySearch('26130972','dk');
        expect(result).toEqual(expect.objectContaining(data))
    })


    //search company by vat
    test('getCompanyByVat finds company in cvr register by cvr', async () => {
        const data = {"name": "Massage 4720 v/Trold Ellegård"}
        const result = await getCompanyByVat(42584126,'dk');
        expect(result).toEqual(expect.objectContaining(data))
    })

    test('getCompanyByVat finds company in cvr register by cvr', async () => {
        const result = await getCompanyByVat('abc','dk');
        expect(result).toThrow("NO_SEARCH")
    })


    //search company by name
    test('getCompanyByName finds company in cvr register by name', async () => {
        const data = {"vat": 24398013}
        const result = await getCompanyByName('gh ejendom','dk');
        expect(result).toEqual(expect.objectContaining(data))
    })

    //search company by productionunit
    test('getCompanyByProdu finds company in cvr register by productionunit', async () => {
        const data = {"vat": 26130972,
            "name": "Sushi San Østerbro"}
        const result = await getCompanyByProdu(1022763411,'dk');
        expect(result).toEqual(expect.objectContaining(data))
    })

    //search company by phone
    test('getCompanyByPhone finds company in cvr register by phone', async () => {
        const data = {"name": "Gro My Gro ApS", "vat": 39846039}
        const result = await getCompanyByPhone(41883086,'dk');
        expect(result).toEqual(expect.objectContaining(data))
    })


})