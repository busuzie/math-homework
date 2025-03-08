const randomTSCode = () => {
  const randNum1 = Math.floor(Math.random() * 10);
  const randNum2 = Math.floor(Math.random() * 10);
  const randOp = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  return `const result${randNum1} ${randOp} ${randNum2} = ${(randNum1 + randOp + randNum2).eval()};`;
};
