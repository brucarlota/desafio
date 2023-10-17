import { getProcesso } from "../api/ProcessosAPI.js";

const resolversProcessos = {
  Query: {
		processos: async (_, { numeroCNJ, tribunal }) => {
			return getProcesso(numeroCNJ, tribunal)
		},
  },
};

export default resolversProcessos;
