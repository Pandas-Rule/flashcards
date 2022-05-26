const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
  }
  
  type Cards {
    id: ID!
    question: String!
    answer: String
  }

  # Queries
  type Query {
    getAllCards: [Cards!]!
  }

  #Mutations
`;

module.exports = { typeDefs };
