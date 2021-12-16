import { Random, WeightedRand } from "../random";
import { WaTable } from "../../hooks/markov";

describe("Random", () => {
  describe("randIntRange", () => {
    it("Generate int random values between 1 and 6", () => {
      const actual = Array(100)
        .fill(0)
        .map((_) => Random.randIntRange(1, 7));

      const hasAllInt =
        actual.includes(1) &&
        actual.includes(2) &&
        actual.includes(3) &&
        actual.includes(4) &&
        actual.includes(5) &&
        actual.includes(6);

      const betweenOneAndSix = !actual
        .map((v) => [1, 2, 3, 4, 5, 6].includes(v))
        .includes(false);

      expect(hasAllInt).toBe(true);
      expect(betweenOneAndSix).toBe(true);
    });
  });
});

describe("WeightedRand", () => {
  // Each index 0, 1, 2 and 3 are weighted 1/6, 1/3, 1/2 and 0.
  const table: WaTable = {
    aliases: [1, 1, 1, 2],
    probs: [0.333333333333333, 1.0, 0.0, 1.0],
  };

  it("Weighted random sampling", () => {
    const rnd = new WeightedRand(table);

    const N = 100000;
    const actual = Array(N)
      .fill(0)
      .map((_) => rnd.next());

    const i_0 = actual.filter((v) => v === 0).length;
    const i_1 = actual.filter((v) => v === 1).length;
    const i_2 = actual.filter((v) => v === 2).length;
    const i_3 = actual.filter((v) => v === 3).length;

    const EXPT = [N / 6, N / 3, N / 2, 0.0];

    expect(EXPT[0] * 0.95 <= i_0 && i_0 <= EXPT[0] * 1.05).toBe(true);
    expect(EXPT[1] * 0.95 <= i_1 && i_1 <= EXPT[1] * 1.05).toBe(true);
    expect(EXPT[2] * 0.95 <= i_2 && i_2 <= EXPT[2] * 1.05).toBe(true);
    expect(EXPT[3] === i_3).toBe(true);
  });
});
