const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    artists: [Artist]!
    songs: [Song]!
    song(id: String): Song!
  }

  type Mutation {
    addArtist(input: AddArtistInput!): AddArtistPayload
  }

  input AddArtistInput {
    name: String!
  }

  type AddArtistPayload {
    id: ID!
    name: String!
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
