import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import server from "../../__mocks__/apollo";
import { allVerses } from "../../types/allVerses";

it("gets all verses", async () => {
  const { query } = createTestClient(server());

  const VERSES_QUERY = gql`
    query allVerses {
      allTopVerses {
        id
        verse
      }
      allMiddleVerses {
        id
        verse
      }
      allBottomVerses {
        id
        verse
      }
    }
  `;

  const { data } = await query({
    query: VERSES_QUERY,
  });

  const { allTopVerses, allMiddleVerses, allBottomVerses } = data as allVerses;

  expect(allTopVerses.length).toBeGreaterThan(0);
  expect(allMiddleVerses.length).toBeGreaterThan(0);
  expect(allBottomVerses.length).toBeGreaterThan(0);
});
