const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    account(id: String!): Account,
    accounts: [Account]
  }
  type Account {
    id: String,
    firstname: String,
    lastname: String,
    age: Int,
    occupation: String
  }
  type Mutation {
    createAccount(
      firstname: String!,
      lastname: String!,
      age: Int!,
      occupation: String!
    ): Account
  }
`);
