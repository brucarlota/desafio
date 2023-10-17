const baseURL = "http://localhost:3000/";

const buscaTribunais = async () => {
	const url = `${baseURL}api/tribunais`;
	return fetch(url).then(response => response.json());
}

export { buscaTribunais };
