const pairSumFromArray = (array = [], target) => {
  const isAllNumbers = array.every((i) => typeof i === "number");
  const resultNumbers = [];
  if (!isAllNumbers) {
    return "all array element should be number";
  }

  for (let index = 0; index < array.length; index++) {
    const x = array[index];

    if (resultNumbers.length > 0) {
      break;
    }

    for (let i = index + 1; i < array.length; i++) {
      const y = array[i];
      if (x + y === target) {
        resultNumbers.push(x, y);
        break;
      }
    }
  }
  return resultNumbers.length > 0 ? resultNumbers : "Pair not found";
};
export default pairSumFromArray;
