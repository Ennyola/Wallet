import { gql } from '@apollo/client'

export default gql `
query getFunds{
    funds{
      id
      moneyAdded
      currentBalance
      previousBalance
      moneyRemoved
    }
  }

`