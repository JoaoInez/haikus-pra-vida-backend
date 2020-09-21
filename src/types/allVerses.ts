/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allVerses
// ====================================================

export interface allVerses_allTopVerses {
  __typename: "TopVerse";
  id: string;
  verse: string;
}

export interface allVerses_allMiddleVerses {
  __typename: "MiddleVerse";
  id: string;
  verse: string;
}

export interface allVerses_allBottomVerses {
  __typename: "BottomVerse";
  id: string;
  verse: string;
}

export interface allVerses {
  allTopVerses: (allVerses_allTopVerses | null)[] | null;
  allMiddleVerses: (allVerses_allMiddleVerses | null)[] | null;
  allBottomVerses: (allVerses_allBottomVerses | null)[] | null;
}
