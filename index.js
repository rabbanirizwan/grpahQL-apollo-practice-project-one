const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const {Mutation} = require("./resolvers/Mutation");

const { products, categories,reviews } = require("./db");

const resolvers = { Category, Query, Product,Mutation };
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products,
    categories,
    reviews
  },
});

server.listen().then(({ url }) => console.log("Server is", url));
