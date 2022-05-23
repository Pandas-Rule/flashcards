const { Users, Cards } = require('../FakeData.js')

const resolvers = {
  Query: {
    getAllUsers() {
      return Users;
    }
  }
} 

module.exports = { resolvers };
