import { gql, ApolloServer } from "apollo-server";
import schema from "./generated";
import resolvers from "../resolvers";

export default () => {
  const typeDefs = gql(schema);

  return new ApolloServer({ typeDefs, resolvers, mocks: true });
};
