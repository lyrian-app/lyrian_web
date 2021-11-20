import { rest } from "msw";

export const handlers = [
  rest.post("/api/create_model", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          state_space: [
            {
              word: "うち",
              mora: "ウチ",
              syllable: "ウチ",
              part_of_speech: "名詞",
            },
            {
              word: "すもも",
              mora: "スモモ",
              syllable: "スモモ",
              part_of_speech: "名詞",
            },
            {
              word: "の",
              mora: "ノ",
              syllable: "ノ",
              part_of_speech: "助詞",
            },
            {
              word: "も",
              mora: "モ",
              syllable: "モ",
              part_of_speech: "助詞",
            },
            {
              word: "もも",
              mora: "モモ",
              syllable: "モモ",
              part_of_speech: "名詞",
            },
          ],
          wa_table: [
            {
              aliases: [0, 0, 0, 0, 0],
              probs: [0.0, 0.0, 0.0, 0.0, 0.0],
            },
            {
              aliases: [3, 3, 3, 3, 3],
              probs: [1.0, 1.0, 1.0, 1.0, 1.0],
            },
            {
              aliases: [0, 0, 0, 0, 0],
              probs: [1.0, 1.0, 1.0, 1.0, 1.0],
            },
            {
              aliases: [4, 4, 4, 4, 4],
              probs: [1.0, 1.0, 1.0, 1.0, 1.0],
            },
            {
              aliases: [2, 3, 2, 2, 3],
              probs: [1.0, 1.0, 1.0, 0.5, 1.0],
            },
          ],
          prev_index: 5,
        },
      ])
    );
  }),
];
