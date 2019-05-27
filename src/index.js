const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const MusicService = require('./datasources/music-service');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    musicService: new MusicService()
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
