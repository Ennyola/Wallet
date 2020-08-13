import { gql } from '@apollo/client'

export default gql `
query getTransactions{
    transactions{
      id
      moneySaving
      moneySpending
        timeOfTransaction
    }
  }
`