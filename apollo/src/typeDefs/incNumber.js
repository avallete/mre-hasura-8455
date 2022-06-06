import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    incNumber(inp: Int!): Int!
  }
`;
