export const schema = gql`
  type User {
    id: Int!
    naam: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    adres: String!
    postcode: String!
    woonplaats: String!
    roles: String!
    Medewerker: [Bezoek]!
    Klant: [Bezoek]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    naam: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    adres: String!
    postcode: String!
    woonplaats: String!
    roles: String!
  }

  input UpdateUserInput {
    naam: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    adres: String
    postcode: String
    woonplaats: String
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
