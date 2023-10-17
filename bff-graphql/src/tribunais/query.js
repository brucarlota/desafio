import { buscaTribunais } from "../api/TribunaisAPI.js";

const resolversTribunais = {
  Query: {
		tribunais: async () => buscaTribunais(), 
  },
};

export default resolversTribunais;
