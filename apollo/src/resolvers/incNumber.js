export default {
  Mutation: {
    incNumber: async (parent, inp, context, info) => {
      return inp + 1;
    }
  }
};
