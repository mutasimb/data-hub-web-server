const
  { PORT } = process.env,

  express = require("express"),
  { ApolloServer } = require("apollo-server-express"),
  { json, urlencoded } = require("body-parser"),
  cors = require("cors"),
  { connect } = require("mongoose"),

  typeDefs = require("./graphQL/types.js"),
  resolvers = require("./graphQL/resolvers.js"),

  startServer = async () => {
    const
      app = express(),
      apolloServer = new ApolloServer({ typeDefs, resolvers });

    await apolloServer.start();

    apolloServer.applyMiddleware({
      app,
      typeDefs,
      resolvers
    });

    app.use(cors({ origin: "*" }));
    app.use(urlencoded({ extended: false }));
    app.use(json());

    app.use("/api/bmd-kobo", require("./api/bmd-kobo.js"));

    await connect(
      require("./config/keys.js").mongoUri,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
      }
    );
    console.log("Connection established with database");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  };

startServer();
