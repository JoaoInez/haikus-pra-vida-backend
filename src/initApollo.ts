import { gql, ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import resolvers from "./resolvers";

export default async () => {
  const typeDefs = gql(
    readFileSync(__dirname.concat("/schema/schema.graphql"), "utf8")
  );

  return new ApolloServer({ typeDefs, resolvers });
};
