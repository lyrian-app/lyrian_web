import { MarkovState } from "../hooks/markov";
import { Random, WaightedRand } from "./random";

export class MarkovChain {
  private markov: MarkovState;
  private prevIdx: number;

  constructor(markov: MarkovState) {
    this.markov = markov;
    this.prevIdx = markov.state_space.length;
  }

  public next() {
    const len = this.markov.state_space.length;

    const row = (() => {
      if (this.prevIdx === len) {
        this.prevIdx = Random.randIntRange(0, len - 1);
      }
      return this.prevIdx;
    })();

    let waRand = new WaightedRand(this.markov.wa_table[row]);
    const elemIdx = waRand.next();

    this.prevIdx = elemIdx;
    return this.markov.state_space[elemIdx];
  }
}
