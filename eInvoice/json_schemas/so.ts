import {
  businessUnitsSchema204,
  businessUnitsSchema400
} from './index'

const schemas = {
  cbl: {
    businessUnits: {
      schema204: businessUnitsSchema204,
      schema400: businessUnitsSchema400
    }
  }
}

export {schemas}