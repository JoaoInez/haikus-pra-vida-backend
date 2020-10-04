import { gql, ApolloServer } from "apollo-server";
import { readFileSync } from "fs-extra";
import resolvers from "./resolvers";

export default () => {
  const typeDefs = gql(
    process.env.NODE_ENV === "production"
      ? readFileSync(
          __dirname.replace("/dist", "/schema/schema.graphql"),
          "utf8"
        )
      : readFileSync(
          __dirname.replace("/src", "/schema/schema.graphql"),
          "utf8"
        )
  );

  return new ApolloServer({ typeDefs, resolvers, introspection: true });
};
