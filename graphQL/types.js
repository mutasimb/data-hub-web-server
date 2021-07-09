const
  { gql } = require("apollo-server-express"),

  typeDefs = gql`
    scalar Date

    type HelloItem {
      title: String
    }

    type MyType {
      created: Date
    }

    type BmdKoboEntry {
      id: ID!
      st: String!
      tm: Date!
      submit: Date!
      user: String
      t: Float!
      tmx: Float
      tmn: Float
      p: Float
      rh: Int!
    }

    type Item {
      title: String
      description: String
    }

    type Query {
      hello: HelloItem
      getAllBmdKoboAreas: [String]
      getAllBmdKoboYears: [Int]
      getAllBmdKoboEntries: [BmdKoboEntry]
    }

    input ItemInput {
      title: String
      description: String
    }

    type Mutation {
      createItem(item: ItemInput): Item
    }
  `;

module.exports = typeDefs;
