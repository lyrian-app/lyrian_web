import { WaTable } from "../hooks/markov";

export class Random {
  public static randIntRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public static randFloat() {
    return Math.random();
  }
}

export class WeightedRand {
  private aliases;
  private probs;

  constructor(table: WaTable) {
    this.aliases = table.aliases;
    this.probs = table.probs;
  }

  public next() {
    const i = Random.randIntRange(0, this.probs.length - 1);
    const r = Random.randFloat();
    if (r < this.probs[i]) {
      return this.aliases[i];
    }
    return i;
  }
}
