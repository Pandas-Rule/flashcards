const { Users, Cards } = require('../FakeData.js')

const resolvers = {
  Query: {
    getAllCards() {
      return Cards;
    }
  }
} 

module.exports = { resolvers };
