import { getProcessos } from "../controllers/processosController.js";

async function processosRoutes(app) {
	app.get("/busca", getProcessos);
}

export default processosRoutes;
