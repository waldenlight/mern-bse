const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!  
    bookId: Int!  
    authors: [String]  
    description: String!  
    title: String!  
    image: String!  
    link: String!  
  }

  type Auth {
    token
    user: User
  }

  type User {
    _id: ID!  
    username: String!  
    email: String!  
    bookCount: Int!  
    savedBooks: [book]  
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: Array!, description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
    removeBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;
