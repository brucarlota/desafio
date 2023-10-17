import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./src/schema.js";
import resolversProcesso from './src/processos/query.js';
import resolversTribunais from './src/tribunais/query.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: [
		resolversProcesso,
		resolversTribunais
	],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
