const { Book } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createBook: async (parent, args) => {
      const book = await Book.create(args);
      return book;
    },
    createVote: async (parent, { _id, bookNum }) => {
      const book = await Book.findOneAndUpdate(
        { _id },
        { $inc: { [`book${bookNum}_votes`]: 1 } },
        { new: true }
      );
      return book;
    },
  },
};

module.exports = resolvers;
