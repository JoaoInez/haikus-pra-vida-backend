import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import server from "../../__mocks__/apollo";
import { haiku } from "../../types/haiku";

it("gets an haiku", async () => {
  const { query } = createTestClient(server());

  const HAIKU_QUERY = gql`
    query haiku {
      haiku {
        topVerse
        middleVerse
        bottomVerse
      }
    }
  `;

  const { data } = await query({ query: HAIKU_QUERY });

  expect((data as haiku).haiku.topVerse).toBe("Hello World");
  expect((data as haiku).haiku.middleVerse).toBe("Hello World");
  expect((data as haiku).haiku.bottomVerse).toBe("Hello World");
});
