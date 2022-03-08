# CVR-api
Package for search in danish CVR register 

The CVR-api can be used for searching in the danish and norwegian CVR register.
CVR number, p-number and company name can be used as search parameters to find a company in the register. Country is required. 

#Install

```
npm install cvr-api
```

#Usage

```
import { getCompanyByVat } from 'cvr-api'

const result = getCompanyByVat (search input, country)
```

