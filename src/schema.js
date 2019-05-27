const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    artists: [Artist]!
    songs: [Song]!
    song(id: String): Song!
  }

  type Artist {
    id: ID!
    name: String!
    songs: [Song]!
  }

  type Song {
    id: ID!
    name: String!
    artist: Artist!
    collaborators: [Collaborator]!
  }

  type Collaborator {
    id: ID!
    artist: Artist!
    share: Float!
  }
`;

module.exports = typeDefs;
