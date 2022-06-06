export default {
    Query: {
        user: async (_) => {
          return {
            email: "test@gmail.com",
            name: "test"
          }
        }
      },
}