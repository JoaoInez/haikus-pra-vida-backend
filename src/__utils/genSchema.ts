import { outputFile, readFile } from "fs-extra";

readFile(__dirname.replace("/__utils", "/schema/schema.graphql"), "utf-8")
  .then((data) =>
    outputFile(
      __dirname.replace("/__utils", "/__mocks__/generated.ts"),
      `export default \`${data}\``
    )
  )
  .catch((err) => {
    console.error(err);
  });

console.log("Schema file generated!");
