/**
 * 汉诺塔
 */

const hanoi = (n, a, b, c) => {
  if (n > 0) {
    hanoi(n - 1, a, c, b);
    console.log(`moving from %s to %s ${a} to ${c}`)
    hanoi(n - 1, b, a, c);
  }
}

hanoi(30, 'A', 'B', 'C');