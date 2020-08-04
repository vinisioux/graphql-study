import startServer from "./startServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

import "./config/mongo";

startServer({ typeDefs, resolvers });
