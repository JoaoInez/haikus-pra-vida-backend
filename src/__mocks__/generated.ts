export default `type Haiku {
  topVerse: String!
  middleVerse: String!
  bottomVerse: String!
}

type TopVerse {
  id: ID!
  verse: String!
}

type MiddleVerse {
  id: ID!
  verse: String!
}

type BottomVerse {
  id: ID!
  verse: String!
}

type Query {
  haiku: Haiku
  TopVerse(id: ID!): TopVerse
  allTopVerses(page: Int, perPage: Int): [TopVerse]
  _allTopVersesMeta(page: Int, perPage: Int): ListMetadata
  MiddleVerse(id: ID!): MiddleVerse
  allMiddleVerses(page: Int, perPage: Int): [MiddleVerse]
  _allMiddleVersesMeta(page: Int, perPage: Int): ListMetadata
  BottomVerse(id: ID!): BottomVerse
  allBottomVerses(page: Int, perPage: Int): [BottomVerse]
  _allBottomVersesMeta(page: Int, perPage: Int): ListMetadata
}

type Mutation {
  createTopVerse(verse: String!): TopVerse
  updateTopVerse(id: ID!, verse: String!): TopVerse
  deleteTopVerse(id: ID!): TopVerse
  createMiddleVerse(verse: String!): MiddleVerse
  updateMiddleVerse(id: ID!, verse: String!): MiddleVerse
  deleteMiddleVerse(id: ID!): MiddleVerse
  createBottomVerse(verse: String!): BottomVerse
  updateBottomVerse(id: ID!, verse: String!): BottomVerse
  deleteBottomVerse(id: ID!): BottomVerse
}

type ListMetadata {
  count: Int!
}
`