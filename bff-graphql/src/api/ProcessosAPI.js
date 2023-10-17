const baseURL = "http://localhost:3000/";

const getProcesso = async (numeroCNJ, tribunal) => {
	const tribunalParam = tribunal ? `&tribunal=${tribunal}` : '';
	const url = `${baseURL}api/busca?proc=${numeroCNJ}${tribunalParam}`;
	return fetch(url).then(response => response.json());
}

export { getProcesso };