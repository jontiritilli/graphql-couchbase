const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    user(id: String!): User,
    users: [User]
  }
  type User {
    id: String,
    firstname: String,
    lastname: String,
    age: Int,
    occupation: String
  }
  type Mutation {
    createUser(
      firstname: String!,
      lastname: String!,
      age: Int!,
      occupation: String!
    ): User
  }
`);
