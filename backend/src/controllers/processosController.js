import { processosMock } from "../mocks/processosMock.js";

async function getProcessos(req, res) {
	const nroProcesso = req.query.proc;
	const tribunal = req.query.tribunal;
	let result;
	if (nroProcesso && tribunal) {
		result = processosMock.filter(
			(processo) =>
				processo.numeroCNJ === nroProcesso &&
				processo.tribunalOrigem === tribunal,
		);
	} else if (nroProcesso) {
		result = processosMock.filter(
			(processo) => processo.numeroCNJ === nroProcesso,
		);
	} else if (tribunal) {
		result = processosMock.filter(
			(processo) => processo.tribunalOrigem === tribunal,
		);
	} else {
		result = processosMock;
	}
	res.status(200).send(result);
}

export { getProcessos };
