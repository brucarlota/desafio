import app from "./src/app.js";

const PORT = 3000;
try {
	app.listen({ port: PORT }, (err, address) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
		app.log.info(`server listening on ${address}`);
	});
} catch (error) {
	app.log.error(error);
}
