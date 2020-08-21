import { gql } from '@apollo/client'

export default gql `
mutation FundWallet($amount: String!, $timeOfTransaction: String!){
  fundWallet(amount:$amount, timeOfTransaction : $timeOfTransaction){
    saveMoney{
      moneyAdded
    }
  }
}

`