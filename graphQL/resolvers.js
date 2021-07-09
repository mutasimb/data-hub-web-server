const { timeFormat } = require('d3-time-format');

const
  { GraphQLScalarType, Kind } = require('graphql'),
  BmdObservedData = require("../models/BmdObservedData"),

  dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime();
    },
    parseValue(value) {
      console.log("Parsing: " + value);
      return new Date(value);
    },
    parseLiteral(ast) {
      console.log("Parsing literal: " + ast);
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10));
      }
      return null;
    },
  }),
  resolvers = {
    Date: dateScalar,
    Query: {
      hello: async () => {
        console.log("hello: " + timeFormat("%X")(new Date()));
        return { title: timeFormat("%X")(new Date()) }
      },
      getAllBmdKoboAreas: async () => {
        return await BmdObservedData.distinct("st");
      },
      getAllBmdKoboYears: async () => {
        const todayYear = (new Date()).getFullYear();
        return [todayYear - 1, todayYear];
      },
      getAllBmdKoboEntries: async () => {
        const
          todayYear = (new Date()).getFullYear(),
          entries = await BmdObservedData.find({
            tm: {
              $gte: new Date(`${todayYear - 2}-12-31T17:59:59.000Z`)
            }
          });
        return entries;
      }
    },
    Mutation: {
      createItem: async (_, { item }) => {
        const { title, description } = item;
        console.log({ title, description });

        return item;
      }
    }
  };

module.exports = resolvers;
