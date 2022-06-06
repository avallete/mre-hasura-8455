import { gql } from "apollo-server-express";

export default gql`
  type User {
    email: String!
    id: ID!
  }

  extend type Query {
    user: User!
  }
`;
