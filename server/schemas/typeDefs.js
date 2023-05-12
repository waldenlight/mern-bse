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
    token: ID!
    user: User
  }

  type User {
    _id: ID!  
    username: String!  
    email: String!  
    bookCount: Int!  
    savedBooks: [Book]  
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
    removeBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;
