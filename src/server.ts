import initMongoose from "./initMongoose";
import initApollo from "./initApollo";

(() => {
  initMongoose();
  const server = initApollo();

  server.listen({ port: process.env.PORT || 80 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
