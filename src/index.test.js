import { getCompanyBySearch } from './index.js'
import { getCompanyByVat } from './index.js'
import { getCompanyByName } from './index.js'

describe('index.js', () => {
    test('getCompanyBySearch finds company in cvr register by name, cvr or p-number', () => {
        const result = getCompanyBySearch('47320','dk');
        expect(result).toReturn()
    });

    //search company by vat
    test('getCompanyByVat trows error when passed value is not a number', () => {
        expect(() => {
            getCompanyByVat('a', 'dk');
        }).toThrow('[getCompanyByVat] Passed arguments must be a number.');
    })
    
    test('getCompanyByVat finds company in cvr register by cvr', () => {
        const result = getCompanyByVat('47320','dk')
        expect(result).toReturn()
    });

    //search company by name
    test('getCompanyByName finds company in cvr register by name', () => {
        const result = getCompanyByVat('ejendom','dk')
        expect(result).toReturn()
    });

})