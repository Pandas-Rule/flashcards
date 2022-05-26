import {gql} from '@apollo/client';

export const getAllCards =gql`

query Query {
  getAllCards {
    id
    question
    answer
  }
}

`;


