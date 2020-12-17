import { gql } from '@apollo/client'

export const FUND_WALLET = gql `
mutation FundWallet($amount: String!, $timeOfTransaction: String!){
  fundWallet(amount:$amount, timeOfTransaction : $timeOfTransaction){
    saveMoney{
      id
      moneyAdded
    }
  }
}

`

export const PAY_AMOUNT = gql `
mutation PayAmount($amount: String!, $timeOfTransaction: String!) {
  payAmount(amount: $amount, timeOfTransaction: $timeOfTransaction) {
    spendMoney {
      id
      currentBalance
      previousBalance
      moneyAdded
      moneyRemoved
    }
  }
}


`