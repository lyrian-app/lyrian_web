import { fetchMarkovModel } from ".";
import { jsonModel } from "../mocks/sample_model.json";

describe("fetchMarkovModel", () => {
  it("Request MarkobModel", async () => {
    fetchMarkovModel("something").then((text) => {
      const actual = JSON.parse(text);
      expect(actual).toStrictEqual(jsonModel);
    });
  });
});
