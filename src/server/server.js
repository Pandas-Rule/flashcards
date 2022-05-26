const {ApolloServer} = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } =  require('apollo-server-core');
const { typeDefs } = require("./Schema/TypeDefs")
const { resolvers } = require("./Schema/Resolvers")
const express = require('express');
const http = require('http'); 

(async function startApolloServer() {

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    mocks:true
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/'
  });

  // Modified server startup
  await new Promise (resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();


// const server = new ApolloServer({ typeDefs, resolvers});

// // await server.start();

// server.applyMiddleware({app});

// app.listen({port: 3001 }, ()=> {
//   console.log('SERVER RUNNING ON PORT 3001')
// });
