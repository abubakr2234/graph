const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');


const LaunchType = new GraphQLObjectType({
  name: 'People',
  fields: () => ({
    name: { type: GraphQLString },
    height: { type: GraphQLInt},
    mass: { type: GraphQLInt},
    gender: { type: GraphQLString}

  })
});






const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      people: {
        type: new GraphQLList(LaunchType),
        resolve(parent, args) {
          return axios
            .get('https://swapi.dev/api/people/?page=1')
            .then(res => res.data);
        }
    }
      },
    })     


module.exports = new GraphQLSchema({
  query: RootQuery
});