import initMongoose from "./initMongoose";
import initApollo from "./initApollo";

(async () => {
  initMongoose();
  const server = await initApollo();

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
