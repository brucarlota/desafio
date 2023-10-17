import processosRoutes from "./processosRoutes.js";
import tribunaisRoutes from "./tribunaisRoutes.js";

export const routes = async (fastify) => {
	processosRoutes(fastify);
	tribunaisRoutes(fastify);
};

export default routes;
