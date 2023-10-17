import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import app from "../app.js";

describe("Processos", () => {
	beforeAll(() => {
		app.listen({ port: 3033 });
	});

	afterAll((done) => {
		app.close();
		done();
	});

	it("should return 'Processos' by numeroCNJ", async () => {
		const resp = await app.inject({
			url: "/api/busca?proc=50016828820208130672",
		});

		expect(resp.statusCode).toStrictEqual(200);
		expect(resp.json()).toStrictEqual([
			{
				id: "cnj-id-01",
				numeroCNJ: "50016828820208130672",
				partes: {
					autor: "Rogan Cordeiro",
					reu: "Jaime de Moura",
				},
				tribunalOrigem: "tjsp",
				dataInicio: "10/01/2023",
				movimentacoes: [
					{
						data: "24/11/2022",
						descricao: "eu nibh vulputate mauris sagittis placerat.",
					},
				],
			},
		]);
	});
});
