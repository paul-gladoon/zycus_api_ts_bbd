import {
  businessUnitsSchema204,
  businessUnitsSchema400,
  companyEntities204
} from './index'

const schemas = {
  cbl: {
    businessUnits: {
      schema204: businessUnitsSchema204,
      schema400: businessUnitsSchema400
    },
    companyEntities: {
      schema204: companyEntities204
    }
  }
}

export {schemas}