import { getAllTribunais } from "../controllers/tribunaisController.js";

async function tribunaisRoutes(app) {
	app.get("/tribunais", getAllTribunais);
}

export default tribunaisRoutes;
