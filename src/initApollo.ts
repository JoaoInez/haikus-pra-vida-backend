import { gql, ApolloServer } from "apollo-server";
import { readFileSync } from "fs-extra";
import resolvers from "./resolvers";

export default () => {
  const typeDefs = gql(
    readFileSync(__dirname.concat("/schema/schema.graphql"), "utf8")
  );

  return new ApolloServer({ typeDefs, resolvers });
};
