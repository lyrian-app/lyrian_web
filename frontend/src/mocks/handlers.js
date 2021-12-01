import { rest } from "msw";
import { jsonModel } from "./sample_model.json.js";

export const handlers = [
  rest.post("/api/create_model", async (_, res, ctx) => {
    const sleep = () => {
      return new Promise((resolve) => setTimeout(() => resolve(), 3000, false));
    };

    await sleep();

    return res(ctx.status(200), ctx.json(jsonModel));
  }),
];
