import { gql } from '@apollo/client'

export default gql `
mutation FundWallet($amount: String!){
  fundWallet(amount:$amount){
    saveMoney{
      moneyAdded
    }
  }
}

`