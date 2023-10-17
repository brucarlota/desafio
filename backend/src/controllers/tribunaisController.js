import { tribunaisMock } from "../mocks/tribunaisMock.js";

async function getAllTribunais(req, res) {
	try {
		const tribunais = tribunaisMock;
		res.status(200).send(tribunais);
	} catch (error) {
		res.status(500).send(error);
	}
}

export { getAllTribunais };
