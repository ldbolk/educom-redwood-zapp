export const schema = gql`
  type Taken {
    id: Int!
    taak: String!
    extra: String
  }

  type Query {
    takens: [Taken!]! @requireAuth
    taken(id: Int!): Taken @requireAuth
  }

  input CreateTakenInput {
    taak: String!
    extra: String
  }

  input UpdateTakenInput {
    taak: String
    extra: String
  }

  type Mutation {
    createTaken(input: CreateTakenInput!): Taken! @requireAuth
    updateTaken(id: Int!, input: UpdateTakenInput!): Taken! @requireAuth
    deleteTaken(id: Int!): Taken! @requireAuth
  }
`
