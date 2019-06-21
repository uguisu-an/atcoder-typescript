import { readFileSync } from "fs";

const STDIN: string = readFileSync("/dev/stdin", "utf8");

// 文字列を数列に分解する
// const l2n = (line: string): number[] => line.split(" ").map(Number);

// NxMの二次元配列を作る
// const d2 = (n: number, m: number, initial: number = 0): number[][] => new Array(n).fill([]).map(() => new Array(m).fill(initial))

const lines = STDIN.split("\n");
const N = Number(lines[0]);
// const [N, M] = l2n(lines[0]);
for (let i = 1; i < N + 1; i++) {
  const line = lines[i];
  /**
   * process input
   */
  console.info(line);
  // console.info(l2n(line));
}
