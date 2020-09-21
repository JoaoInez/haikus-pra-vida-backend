import initMongoose from "./initMongoose";
import initApollo from "./initApollo";

(() => {
  initMongoose();
  const server = initApollo();

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
