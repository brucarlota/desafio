import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import app from "../app.js";
import { tribunaisMock } from "../mocks/tribunaisMock.js";

let server;

beforeAll(() => {
	server = app.listen({ port: 3030 });
});

afterAll((done) => {
	done();
});

describe("Tribunais", () => {
	it("should test", async () => {
		const resp = await app.inject({
			url: "/api/tribunais",
		});

		expect(resp.statusCode).toStrictEqual(200);
		expect(resp.json()).toStrictEqual(tribunaisMock);
	});
});
