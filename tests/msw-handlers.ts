import { rest } from "msw";

const SERVER = "https://api.demo.org/3";

export const handlers = [
  rest.get(`${SERVER}/req/238`, (_req, res, ctx) => res(ctx.json([]))),
  rest.get(`${SERVER}/discover/`, (_req, res, ctx) => res(ctx.json([]))),
  rest.post(`${SERVER}/order`, (_req, res, ctx) =>
    res(ctx.json({ orderNumber: 123455676 })),
  ),
];
