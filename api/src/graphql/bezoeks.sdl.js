export const schema = gql`
  type Bezoek {
    id: Int!
    klantId: Int!
    medewerkerId: Int!
    klant: User!
    medewerker: User!
    taakList: [Taken]!
    createdAt: DateTime!
  }

  type Query {
    bezoeks: [Bezoek!]! @requireAuth
    bezoek(id: Int!): Bezoek @requireAuth
  }

  input CreateBezoekInput {
    klantId: Int!
    medewerkerId: Int!
  }

  input UpdateBezoekInput {
    klantId: Int
    medewerkerId: Int
  }

  type Mutation {
    createBezoek(input: CreateBezoekInput!): Bezoek! @requireAuth
    updateBezoek(id: Int!, input: UpdateBezoekInput!): Bezoek! @requireAuth
    deleteBezoek(id: Int!): Bezoek! @requireAuth
  }
`
