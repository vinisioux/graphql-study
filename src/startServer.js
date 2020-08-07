import { ApolloServer, PubSub } from 'apollo-server';

function startServer({ typeDefs, resolvers }) {
  const pubsub = new PubSub();

  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
  server.listen().then(({ url }) => {
    return console.log(`🚀 Server started at ${url}`);
  });
}

export default startServer;
