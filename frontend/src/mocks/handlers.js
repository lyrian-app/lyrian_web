import { rest } from "msw";
import { jsonModel } from "./sample_model.json.js";

export const handlers = [
  rest.post("/api/create_model", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(jsonModel));
  }),
];
